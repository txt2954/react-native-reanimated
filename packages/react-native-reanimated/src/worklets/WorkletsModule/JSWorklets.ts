'use strict';

import type { IWorkletsModule, ShareableRef } from '../../commonTypes';
import { ReanimatedError } from '../../errors';
import { mockedRequestAnimationFrame } from '../../mockedRequestAnimationFrame';
import { isJest } from '../../PlatformChecker';
import type { WorkletRuntime } from '../../runtimes';

export function createJSWorkletsModule(): IWorkletsModule {
  return new JSWorklets();
}

const requestAnimationFrameImpl =
  isJest() || !globalThis.requestAnimationFrame
    ? mockedRequestAnimationFrame
    : globalThis.requestAnimationFrame;

class JSWorklets implements IWorkletsModule {
  makeShareableClone<T>(): ShareableRef<T> {
    throw new ReanimatedError(
      'makeShareableClone should never be called in JSReanimated.'
    );
  }

  scheduleOnUI<T>(worklet: ShareableRef<T>) {
    // TODO:
    // @ts-ignore web implementation has still not been updated after the rewrite, this will be addressed once the web implementation updates are ready
    requestAnimationFrameImpl(worklet);
  }

  createWorkletRuntime(
    _name: string,
    _initializer: ShareableRef<() => void>
  ): WorkletRuntime {
    throw new ReanimatedError(
      'createWorkletRuntime is not available in JSReanimated.'
    );
  }

  scheduleOnRuntime() {
    throw new ReanimatedError(
      'scheduleOnRuntime is not available in JSReanimated.'
    );
  }

  executeOnUIRuntimeSync<T, R>(_shareable: ShareableRef<T>): R {
    throw new ReanimatedError(
      '`executeOnUIRuntimeSync` is not available in JSReanimated.'
    );
  }
}
