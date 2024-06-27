import { Button, StyleSheet, View } from 'react-native';
import ExpensiMark from 'expensify-common/dist/ExpensiMark';
import React from 'react';
import { runOnUI } from 'react-native-reanimated';
const mark = new ExpensiMark();
const _worklet_10343022443447_init_data = {
  code: "function anonymous(){const{ExpensiMarkClassFucktory}=this.__closure;const ExpensiMark=ExpensiMarkClassFucktory();const expensimark=new ExpensiMark();const output=expensimark.replace('Hello *world*!');console.log(output);}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/classCreation.js",
  sourceMap: "{\"version\":3,\"names\":[\"anonymous\",\"ExpensiMarkClassFucktory\",\"__closure\",\"ExpensiMark\",\"expensimark\",\"output\",\"replace\",\"console\",\"log\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/classCreation.js\"],\"mappings\":\"AAUY,SAAAA,SAAMA,CAAA,QAAAC,wBAAA,OAAAC,SAAA,CAEZ,KAAM,CAAAC,WAAW,CAAGF,wBAAiB,GACrC,KAAM,CAAAG,WAAS,KAAAD,WAAoB,GACnC,MAAAE,MAAY,CAAAD,WAAO,CAAAE,OAAA,mBACrBC,OAAA,CAAAC,GAAA,CAAAH,MAAA,E\",\"ignoreList\":[]}",
  version: "3.12.0"
};
export default function EmptyExample() {
  const handlePress = () => {
    runOnUI(function () {
      const _e = [new global.Error(), -2, -27];
      const anonymous = function () {
        const expensimark = new ExpensiMark();
        const output = expensimark.replace('Hello *world*!');
        console.log(output);
      };
      anonymous.__closure = {
        ExpensiMarkClassFucktory: ExpensiMark.ExpensiMarkClassFucktory
      };
      anonymous.__workletHash = 10343022443447;
      anonymous.__initData = _worklet_10343022443447_init_data;
      anonymous.__stackDetails = _e;
      return anonymous;
    }())();
  };
  return null;
}
