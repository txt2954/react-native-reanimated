// @ts-nocheck
import type { PluginItem, NodePath } from '@babel/core';
import type {
  CallExpression,
  File,
  FunctionDeclaration,
  Program,
} from '@babel/types';
import {
  processIfAutoworkletizableCallback,
  processCalleesAutoworkletizableCallbacks,
} from './autoworkletization';
import { WorkletizableFunction } from './types';
import type { ReanimatedPluginPass } from './types';
import {
  processIfWithWorkletDirective,
  processWorklet,
} from './workletSubstitution';
import { processInlineStylesWarning } from './inlineStylesWarning';
import { addCustomGlobals } from './utils';
import { initializeGlobals } from './globals';
import { substituteWebCallExpression } from './webOptimization';
import fs from 'fs';
import path_ from 'path';

let readNames: string[][] = [[]];

module.exports = function (): PluginItem {
  function runWithTaggedExceptions(fun: () => void) {
    try {
      fun();
    } catch (e) {
      throw new Error(`[Reanimated] Babel plugin exception: ${e as string}`);
    }
  }

  return {
    pre() {
      runWithTaggedExceptions(() => {
        initializeGlobals();
        addCustomGlobals.call(this);
        // create file named _reanimated_paths.js
        // const names = 'react-native-reanimated/createAnimatedComponents/utils';
        // console.log('creating file');
        // fs.writeFileSync('_reanimated_paths.js', names, 'utf8');
        readNames = fs
          .readFileSync('_reanimated_paths.js', 'utf8')
          .split('\n')
          .map((str) => str.split(' '));
      });
    },
    visitor: {
      // Program: {
      //   enter(path, state) {
      //     console.log(state.filename);
      //   },
      // },
      CallExpression: {
        enter(path: NodePath<CallExpression>, state: ReanimatedPluginPass) {
          runWithTaggedExceptions(() => {
            processCalleesAutoworkletizableCallbacks(path, state);
            if (state.opts.substituteWebPlatformChecks) {
              substituteWebCallExpression(path);
            }
          });
        },
      },
      [WorkletizableFunction]: {
        enter(
          path: NodePath<WorkletizableFunction>,
          state: ReanimatedPluginPass
        ) {
          runWithTaggedExceptions(() => {
            processIfWithWorkletDirective(path, state) ||
              processIfAutoworkletizableCallback(path, state);
            if (
              !state.filename.includes('react-native-reanimated/src') &&
              'id' in path.node &&
              path.node.id &&
              readNames.some(
                (pair) =>
                  state.filename.includes(pair[0]) &&
                  path.node.id.name === pair[1]
              )
            ) {
              const splitPath = state.filename.split('/');
              const index = splitPath.indexOf('node_modules');
              const nicePath = splitPath.slice(index).join('/');

              console.log('processing', path.node.id.name, 'in', nicePath);
              processWorklet(path, state);
            }
          });
        },
      },
      JSXAttribute: {
        enter(path, state) {
          runWithTaggedExceptions(() =>
            processInlineStylesWarning(path, state)
          );
        },
      },
    },
  };
};
