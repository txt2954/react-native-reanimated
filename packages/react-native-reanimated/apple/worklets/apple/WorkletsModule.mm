#import <React/RCTBridge+Private.h>
#import <worklets/WorkletRuntime/RNRuntimeWorkletDecorator.h>
#import <worklets/apple/REAMessageThread.h>
#import <worklets/apple/WorkletsModule.h>
#import <worklets/tools/SingleInstanceChecker.h>

using worklets::NativeWorkletsModule;
using worklets::RNRuntimeWorkletDecorator;

@interface RCTBridge (JSIRuntime)
- (void *)runtime;
@end

@interface RCTBridge (RCTTurboModule)
- (std::shared_ptr<facebook::react::CallInvoker>)jsCallInvoker;
- (void)_tryAndHandleError:(dispatch_block_t)block;
@end

@implementation WorkletsModule {
  std::shared_ptr<NativeWorkletsModule> nativeWorkletsModule_;
#ifndef NDEBUG
  worklets::SingleInstanceChecker<WorkletsModule> singleInstanceChecker_;
#endif // NDEBUG
}

- (std::shared_ptr<NativeWorkletsModule>)getNativeWorkletsModule
{
  return nativeWorkletsModule_;
}

@synthesize moduleRegistry = _moduleRegistry;

RCT_EXPORT_MODULE(WorkletsModule);

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(installTurboModule : (nonnull NSString *)valueUnpackerCode)
{
  auto *bridge = self.bridge;
  auto &rnRuntime = *(jsi::Runtime *)bridge.runtime;
  auto jsQueue = std::make_shared<REAMessageThread>([NSRunLoop currentRunLoop], ^(NSError *error) {
    throw error;
  });
  if (_isBridgeless) {
#ifdef RCT_NEW_ARCH_ENABLED
    // TODO
    RCTCxxBridge *cxxBridge = (RCTCxxBridge *)self.bridge;
    auto &rnRuntime = *(jsi::Runtime *)cxxBridge.runtime;
    auto executorFunction = ([executor = _runtimeExecutor](std::function<void(jsi::Runtime & runtime)> &&callback) {
      // Convert to Objective-C block so it can be captured properly.
      __block auto callbackBlock = callback;

      [executor execute:^(jsi::Runtime &runtime) {
        callbackBlock(runtime);
      }];
    });
    auto nativeReanimatedModule = reanimated::createReanimatedModuleBridgeless(
        self, _moduleRegistry, rnRuntime, workletsModule, executorFunction);
    [self attachReactEventListener];
    [self commonInit:nativeReanimatedModule withRnRuntime:rnRuntime];
#else
    // TODO
    [NSException raise:@"Missing bridge" format:@"[Reanimated] Failed to obtain the bridge."];
#endif // RCT_NEW_ARCH_ENABLED
  } else {
//    facebook::jsi::Runtime *jsiRuntime = [self.bridge respondsToSelector:@selector(runtime)]
//        ? reinterpret_cast<facebook::jsi::Runtime *>(self.bridge.runtime)
//        : nullptr;
//
//    if (jsiRuntime) {
//      auto nativeReanimatedModule =
//          reanimated::createReanimatedModule(self, self.bridge, workletsModule);
//      jsi::Runtime &rnRuntime = *jsiRuntime;
//
//      [self commonInit:nativeReanimatedModule withRnRuntime:rnRuntime];
      nativeWorkletsModule_ = std::make_shared<NativeWorkletsModule>(std::string([valueUnpackerCode UTF8String]), jsQueue, self.bridge.jsCallInvoker);
//    }
  }
  
//  nativeWorkletsModule_ = std::make_shared<NativeWorkletsModule>(std::string([valueUnpackerCode UTF8String]), jsQueue);
  RNRuntimeWorkletDecorator::decorate(rnRuntime, nativeWorkletsModule_);

  return @YES;
}

@end
