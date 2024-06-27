import { useEffect } from 'react';
import { runOnUI, makeShareableCloneRecursive } from 'react-native-reanimated';

class ExpensiMarkSubClass {
  constructor() {
    this.pupa = 1;
  }
  method() {
    console.log('Hello from ' + global._WORKLET);
    this.pupa += 1;
    console.log('this.pupa');
    console.log(this.pupa);
  }
}

class ExpensiMark {
  constructor() {
    this.dupa = 1;
    this.subClass = new ExpensiMarkSubClass();
  }
  method() {
    console.log('Hello from ' + global._WORKLET);
    this.dupa += 1;
    console.log(this.dupa);
    this.subClass.method();
  }
}

export default function App() {
  // console.log(Object.keys(ExpensiMark));

  // const expensiMark = new ExpensiMark();
  // expensiMark.method();

  function callback() {
    'worklet';
    const ExpensiMarkClass = ExpensiMarkClassFucktory();

    const expensiMark = new ExpensiMarkClass();
    expensiMark.method();
    expensiMark.method();
    // console.log(expensiMark);
    // console.log(new ExpensiMark());
  }

  // console.log(Object.keys(callback));
  // console.log(callback.__closure);

  makeShareableCloneRecursive(callback);

  runOnUI(callback)();

  // useEffect(() => {

  // worklet();
  // });

  return null;
}
