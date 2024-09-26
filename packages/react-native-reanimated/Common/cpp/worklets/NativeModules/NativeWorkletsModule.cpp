#ifdef RCT_NEW_ARCH_ENABLED
#include <react/renderer/uimanager/UIManagerBinding.h>
#include <react/renderer/uimanager/primitives.h>
#endif // RCT_NEW_ARCH_ENABLED

#include <worklets/NativeModules/NativeWorkletsModule.h>
#include <worklets/SharedItems/Shareables.h>
#include <worklets/Tools/JSLogger.h>
#include <worklets/Tools/JSScheduler.h>
#include <worklets/Tools/UIScheduler.h>
#include <worklets/WorkletRuntime/RNRuntimeWorkletDecorator.h>
#include <worklets/WorkletRuntime/WorkletRuntime.h>

#ifdef __ANDROID__
#include <fbjni/fbjni.h>
#endif // __ANDROID__

// Standard `__cplusplus` macro reference:
// https://en.cppreference.com/w/cpp/preprocessor/replace#Predefined_macros
#if REACT_NATIVE_MINOR_VERSION >= 75 || __cplusplus >= 20202L
// Implicit copy capture of `this` is deprecated in NDK27, which uses C++20.
#define COPY_CAPTURE_WITH_THIS [ =, this ] // NOLINT (whitespace/braces)
#else
// React Native 0.75 is the last one which allows NDK23. NDK23 uses C++17 and
// explicitly disallows C++20 features, including the syntax above. Therefore we
// fallback to the deprecated syntax here.
#define COPY_CAPTURE_WITH_THIS [=] // NOLINT (whitespace/braces)
#endif // REACT_NATIVE_MINOR_VERSION >= 75 || __cplusplus >= 20202L

#include <jsi/jsi.h>

using namespace facebook;

namespace reanimated {

NativeWorkletsModule::NativeWorkletsModule(
    jsi::Runtime &rnRuntime,
    const std::shared_ptr<JSScheduler> &jsScheduler,
    const std::shared_ptr<MessageQueueThread> &jsQueue,
    const std::shared_ptr<UIScheduler> &uiScheduler,
    const std::string &valueUnpackerCode,
    const bool isBridgeless)
    : NativeWorkletsModuleSpec(jsScheduler->getJSCallInvoker()),
      isBridgeless_(isBridgeless),
      jsQueue_(jsQueue),
      jsScheduler_(jsScheduler),
      uiScheduler_(uiScheduler),
      uiWorkletRuntime_(std::make_shared<WorkletRuntime>(
          rnRuntime,
          jsQueue,
          jsScheduler_,
          "Reanimated UI runtime",
          true /* supportsLocking */,
          valueUnpackerCode)),
      valueUnpackerCode_(valueUnpackerCode),
      jsLogger_(std::make_shared<JSLogger>(jsScheduler_)) {
  commonInit(rnRuntime);
}

void NativeWorkletsModule::commonInit(jsi::Runtime &rnRuntime) {
  RNRuntimeWorkletDecorator::decorate(
      rnRuntime, std::shared_ptr<NativeWorkletsModule>(this));
}

NativeWorkletsModule::~NativeWorkletsModule() {
  // TODO: Crashes on reload.
  jsQueue_.reset();
  jsScheduler_.reset();
  uiScheduler_.reset();
  uiWorkletRuntime_.reset();
  jsLogger_.reset();
}

void NativeWorkletsModule::scheduleOnUI(
    jsi::Runtime &rt,
    const jsi::Value &worklet) {
  auto shareableWorklet = extractShareableOrThrow<ShareableWorklet>(
      rt, worklet, "[Reanimated] Only worklets can be scheduled to run on UI.");
  uiScheduler_->scheduleOnUI(COPY_CAPTURE_WITH_THIS {
#if JS_RUNTIME_HERMES
    // JSI's scope defined here allows for JSI-objects to be cleared up after
    // each runtime loop. Within these loops we typically create some temporary
    // JSI objects and hence it allows for such objects to be garbage collected
    // much sooner.
    // Apparently the scope API is only supported on Hermes at the moment.
    const auto scope = jsi::Scope(uiWorkletRuntime_->getJSIRuntime());
#endif
    uiWorkletRuntime_->runGuarded(shareableWorklet);
  });
}

jsi::Value NativeWorkletsModule::executeOnUIRuntimeSync(
    jsi::Runtime &rt,
    const jsi::Value &worklet) {
  return uiWorkletRuntime_->executeSync(rt, worklet);
}

jsi::Value NativeWorkletsModule::createWorkletRuntime(
    jsi::Runtime &rt,
    const jsi::Value &name,
    const jsi::Value &initializer) {
  auto workletRuntime = std::make_shared<WorkletRuntime>(
      rt,
      jsQueue_,
      jsScheduler_,
      name.asString(rt).utf8(rt),
      false /* supportsLocking */,
      valueUnpackerCode_);
  auto initializerShareable = extractShareableOrThrow<ShareableWorklet>(
      rt, initializer, "[Reanimated] Initializer must be a worklet.");
  workletRuntime->runGuarded(initializerShareable);
  return jsi::Object::createFromHostObject(rt, workletRuntime);
}

// TODO: This method should be renamed or worklets::scheduleOnRuntime should be
// made better (see what happens when you remove `worklets::`).
jsi::Value NativeWorkletsModule::scheduleOnRuntime(
    jsi::Runtime &rt,
    const jsi::Value &workletRuntimeValue,
    const jsi::Value &shareableWorkletValue) {
  worklets::scheduleOnRuntime(rt, workletRuntimeValue, shareableWorkletValue);
  return jsi::Value::undefined();
}

// TODO: This method should be renamed or worklets::makeShareableClone should be
// made better (see what happens when you remove `worklets::`).
jsi::Value NativeWorkletsModule::makeShareableClone(
    jsi::Runtime &rt,
    const jsi::Value &value,
    const jsi::Value &shouldRetainRemote,
    const jsi::Value &nativeStateSource) {
  return worklets::makeShareableClone(
      rt, value, shouldRetainRemote, nativeStateSource);
}

} // namespace reanimated
