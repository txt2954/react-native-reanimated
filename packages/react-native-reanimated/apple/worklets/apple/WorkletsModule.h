#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTRuntimeExecutorModule.h>
#import <ReactCommon/RCTRuntimeExecutor.h>
#import <worklets/NativeModules/NativeWorkletsModule.h>

@interface WorkletsModule : RCTEventEmitter <
                                RCTBridgeModule
#ifdef RCT_NEW_ARCH_ENABLED
                                ,
                                RCTRuntimeExecutorModule
#endif // RCT_NEW_ARCH_ENABLED
                                >

- (std::shared_ptr<worklets::NativeWorkletsModule>)getNativeWorkletsModule;

@end
