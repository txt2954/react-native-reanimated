#include <reanimated/RuntimeDecorators/RNRuntimeDecorator.h>
#include <worklets/Tools/ReanimatedVersion.h>

namespace reanimated {

void RNRuntimeDecorator::decorate(
    jsi::Runtime &rnRuntime,
    const std::shared_ptr<NativeReanimatedModule> &nativeReanimatedModule) {
#ifndef NDEBUG
  checkJSVersion(rnRuntime, nativeReanimatedModule->getJSLogger());
#endif // NDEBUG
  injectReanimatedCppVersion(rnRuntime);

  rnRuntime.global().setProperty(
      rnRuntime,
      "_REANIMATED_IS_REDUCED_MOTION",
      nativeReanimatedModule->isReducedMotion());

  rnRuntime.global().setProperty(
      rnRuntime,
      "__reanimatedModuleProxy",
      jsi::Object::createFromHostObject(rnRuntime, nativeReanimatedModule));
}

} // namespace reanimated
