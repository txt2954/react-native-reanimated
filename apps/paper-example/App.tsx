import { runOnUI, makeShareableCloneRecursive } from 'react-native-reanimated';
import { ExpensiMark } from './expensiMark';

export default function App() {
  function callback() {
    'worklet';
    const expensiMark = new ExpensiMark();
    expensiMark.method();
    expensiMark.method();
  }

  makeShareableCloneRecursive(callback);

  runOnUI(callback)();

  return null;
}
