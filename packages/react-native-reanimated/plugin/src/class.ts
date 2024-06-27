import { transformSync } from '@babel/core';
import type { NodePath } from '@babel/core';
import {
  assignmentExpression,
  blockStatement,
  cloneNode,
  directive,
  directiveLiteral,
  expressionStatement,
  identifier,
  memberExpression,
  returnStatement,
  variableDeclaration,
  variableDeclarator,
} from '@babel/types';
import type {
  BlockStatement,
  ClassDeclaration,
  Expression,
  FunctionExpression,
  Program,
  VariableDeclaration,
} from '@babel/types';
import type { ReanimatedPluginPass } from './types';
import generate from '@babel/generator';
import { WorkletizableFunction } from './types';
import traverse from '@babel/traverse';
import { strict as assert } from 'assert';

export function processClass(
  path: NodePath<ClassDeclaration>,
  state: ReanimatedPluginPass
) {
  // @ts-ignore dupa
  const className = path.node.id.name;
  const code = generate(path.node).code;

  const transformedCode = transformSync(code, {
    plugins: ['@babel/plugin-transform-classes'],
    filename: state.file.opts.filename,
    ast: true,
    babelrc: false,
    configFile: false,
  });

  assert(transformedCode);
  assert(transformedCode.ast);

  const ast = transformedCode.ast;

  let fucktory: VariableDeclaration;

  traverse(ast, {
    [WorkletizableFunction]: {
      // @ts-expect-error I don't understand what TS's problem here is.
      enter: (functionPath: NodePath<WorkletizableFunction>) => {
        if (functionPath.parentPath.isObjectProperty()) {
          return;
        }

        const workletDirective = directive(directiveLiteral('worklet'));

        if (functionPath.parentPath.isCallExpression()) {
          const factoryCopy = cloneNode(
            functionPath.node,
            true
          ) as FunctionExpression;
          factoryCopy.id = identifier(className + 'ClassFucktory');
          factoryCopy.body.directives.push(workletDirective);
          fucktory = variableDeclaration('const', [
            variableDeclarator(
              identifier(className + 'ClassFucktory'),
              factoryCopy
            ),
          ]);

          return;
        }

        const bodyPath = functionPath.get('body');
        if (!bodyPath.isBlockStatement()) {
          bodyPath.replaceWith(
            blockStatement([returnStatement(bodyPath.node as Expression)])
          );
        }

        (functionPath.node.body as BlockStatement).directives.push(
          workletDirective
        );
      },
    },
  });

  const body = ast.program.body;

  const clazz = body.pop();

  const toPrimitive = body.pop();

  body.unshift(body.pop()!);
  body.unshift(toPrimitive!);

  body.push(clazz!);
  body.push(fucktory!);

  body.push(
    expressionStatement(
      assignmentExpression(
        '=',
        memberExpression(
          identifier(className),
          identifier(className + 'ClassFucktory')
        ),
        identifier(className + 'ClassFucktory')
      )
    )
  );

  const transformedNewCode = transformSync(generate(ast).code, {
    ast: true,
    filename: state.file.opts.filename,
  });

  assert(transformedNewCode);
  assert(transformedNewCode.ast);

  // const newAst = transformedNewCode.ast;

  const parent = path.parent as Program;

  // const body = transformedNewCode.ast.program.body;

  const index = parent.body.findIndex((node) => node === path.node);

  parent.body.splice(index, 1, ...transformedNewCode.ast.program.body);
  // parent.body.splice(index, 1, ...ast.program.body);
}
