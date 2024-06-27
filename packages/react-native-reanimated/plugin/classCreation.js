import { Button, StyleSheet, View } from 'react-native';
import ExpensiMark from 'expensify-common/dist/ExpensiMark';

import React from 'react';
import { runOnUI } from 'react-native-reanimated';

const mark = new ExpensiMark();

export default function EmptyExample() {
  const handlePress = () => {
    runOnUI(() => {
      'worklet';
      const expensimark = new ExpensiMark();
      const output = expensimark.replace('Hello *world*!');
      console.log(output);
    })();
  };

  return null;
}
