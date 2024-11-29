#import <React/RCTBridge+Private.h>
#import <worklets/Tools/SingleInstanceChecker.h>
#import <worklets/WorkletRuntime/RNRuntimeWorkletDecorator.h>
#import <worklets/apple/REAMessageThread.h>
#import <worklets/apple/WorkletsModule.h>

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
  bool isBridgeless_;
#ifndef NDEBUG
  worklets::SingleInstanceChecker<WorkletsModule> singleInstanceChecker_;
#endif // NDEBUG
}

- (std::shared_ptr<NativeWorkletsModule>)getNativeWorkletsModule
{
  return nativeWorkletsModule_;
}

@synthesize moduleRegistry = _moduleRegistry;
#ifdef RCT_NEW_ARCH_ENABLED
@synthesize runtimeExecutor = _runtimeExecutor;
#endif // RCT_NEW_ARCH_ENABLED

RCT_EXPORT_MODULE(WorkletsModule);

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(installTurboModule : (nonnull NSString *)valueUnpackerCode)
{
  auto *bridge = self.bridge;
  auto &rnRuntime = *(jsi::Runtime *)bridge.runtime;
  isBridgeless_ = ![bridge isKindOfClass:[RCTCxxBridge class]];
  std::string valueUnpackerCodeStr = [valueUnpackerCode UTF8String];
  auto jsQueue = std::make_shared<REAMessageThread>([NSRunLoop currentRunLoop], ^(NSError *error) {
    throw error;
  });
  std::shared_ptr<worklets::JSScheduler> jsScheduler = nullptr;
  if (isBridgeless_) {
#ifdef RCT_NEW_ARCH_ENABLED
    auto executorFunction = ([executor = _runtimeExecutor](std::function<void(jsi::Runtime & runtime)> &&callback) {
      // Convert to Objective-C block so it can be captured properly.
      __block auto callbackBlock = callback;

      [executor execute:^(jsi::Runtime &runtime) {
        callbackBlock(runtime);
      }];
    });
    jsScheduler = std::make_shared<worklets::JSScheduler>(rnRuntime, executorFunction);
#else
    [NSException raise:@"Missing bridge" format:@"[Reanimated] Failed to obtain the bridge."];
#endif // RCT_NEW_ARCH_ENABLED
  } else {
    jsScheduler = std::make_shared<worklets::JSScheduler>(rnRuntime, self.bridge.jsCallInvoker);
  }
  nativeWorkletsModule_ = std::make_shared<NativeWorkletsModule>(valueUnpackerCodeStr, jsQueue, jsScheduler);
  RNRuntimeWorkletDecorator::decorate(rnRuntime, nativeWorkletsModule_);

  return @YES;
}

@end
