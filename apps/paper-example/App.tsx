import { Button, StyleSheet, View } from 'react-native';
import ExpensiMark from 'expensify-common/dist/ExpensiMark';

import React from 'react';
import { runOnUI, logger } from 'react-native-reanimated';

// const mark = new ExpensiMark();

export default function EmptyExample() {
  const handlePress = () => {
    runOnUI(() => {})();
    try {
      // console.log('converting');
      // logger.log = true;
      runOnUI(() => {
        'worklet';
        const expensimark = new ExpensiMark();
        const output = expensimark.replace('Hello *world*!');
        console.log(output);
      })();
    } finally {
      // logger.log = false;
      // console.log('converted');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Press me" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
