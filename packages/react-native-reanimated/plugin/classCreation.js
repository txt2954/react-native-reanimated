'worklet';
// class ExpensiMarkSubClass {
//   constructor() {
//     this.pupa = 1;
//   }
//   method() {
//     console.log('Hello from ' + global._WORKLET);
//     this.pupa += 1;
//     console.log('this.pupa');
//     console.log(this.pupa);
//   }
// }

// class ExpensiMark {
//   constructor() {
//     this.dupa = 1;
//     this.subClass = new ExpensiMarkSubClass();
//   }
//   method() {
//     console.log('Hello from ' + global._WORKLET);
//     this.dupa += 1;
//     console.log(this.dupa);
//     this.subClass.method();
//   }
// }

// function foo() {
//   function bar() {}

//   [].filter(() => true);
// }

const str = {
  foo() {
    const a = { b() {} };
  },
  bar() {},
};
