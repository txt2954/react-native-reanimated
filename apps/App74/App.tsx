import {StyleSheet, View, TouchableOpacity} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import About from './About';

export default function EmptyExample() {
  const width = useSharedValue(100);

  const animatedStyle = useAnimatedStyle(() => ({
    width: width.value,
  }));

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressOut={() => (width.value = withTiming(Math.random() * 50 + 100))}
        style={styles.button}
      />
      <Animated.View style={[styles.animatedBox, animatedStyle]} />
      <About />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedBox: {
    height: 100,
    backgroundColor: 'red',
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});
