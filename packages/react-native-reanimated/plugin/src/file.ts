import {
  blockStatement,
  directive,
  directiveLiteral,
  returnStatement,
} from '@babel/types';

import type {
  Expression,
  Program,
  BlockStatement,
  VariableDeclaration,
} from '@babel/types';
import type { NodePath } from '@babel/core';
import { processClass } from './class';
import type { ReanimatedPluginPass } from './types';

export function processIfWorkletFile(
  path: NodePath<Program>,
  state: ReanimatedPluginPass
) {
  if (
    path.node.directives.some(
      (functionDirective) => functionDirective.value.value === 'worklet'
    )
  ) {
    processWorkletFile(path, state);
    path.node.directives = path.node.directives.filter(
      (functionDirective) => functionDirective.value.value !== 'worklet'
    );
  }
}

function processWorkletFile(
  path: NodePath<Program>,
  state: ReanimatedPluginPass
) {
  path.get('body').forEach((bodyPath) => {
    if (bodyPath.isVariableDeclaration()) {
      processVariableDeclaration(bodyPath);
    }
    if (bodyPath.isFunctionDeclaration()) {
      appendWorkletDirective(bodyPath.node.body);
    }
  });
  path.traverse({
    ClassDeclaration(subPath) {
      processClass(subPath, state);
    },
  });
}

function processVariableDeclaration(path: NodePath<VariableDeclaration>) {
  path.get('declarations').forEach((declaration) => {
    const initPath = declaration.get('init');
    if (initPath.isFunctionExpression()) {
      appendWorkletDirective(initPath.node.body);
    } else if (initPath.isArrowFunctionExpression()) {
      const bodyPath = initPath.get('body');
      if (bodyPath.isBlockStatement()) {
        appendWorkletDirective(bodyPath.node);
      } else {
        bodyPath.replaceWith(
          blockStatement([returnStatement(bodyPath.node as Expression)])
        );
        appendWorkletDirective(bodyPath.node as BlockStatement);
      }
    } else if (initPath.isObjectExpression()) {
      initPath.node.properties.forEach((property) => {
        if (property.type === 'ObjectMethod') {
          appendWorkletDirective(property.body);
        }
      });
    }
  });
}

function appendWorkletDirective(node: BlockStatement) {
  if (
    !node.directives.some(
      (functionDirective) => functionDirective.value.value === 'worklet'
    )
  ) {
    node.directives.push(directive(directiveLiteral('worklet')));
  }
}
