const _worklet_9586549089085_init_data = {
  code: "function foo(){const a={b:function(){}};}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/classCreation.js",
  sourceMap: "{\"version\":3,\"names\":[\"foo\",\"a\",\"b\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/classCreation.js\"],\"mappings\":\"AAiCE,SAAAA,GAAMA,CAAA,EACJ,KAAM,CAAAC,CAAC,CAAG,CAAEC,CAAC,SAAAA,CAAA,CAAG,CAAC,CAAE,CAAC,CACtB\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const _worklet_7147588349779_init_data = {
  code: "function bar(){}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/classCreation.js",
  sourceMap: "{\"version\":3,\"names\":[\"bar\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/classCreation.js\"],\"mappings\":\"AAoCE,SAAAA,GAAOA,CAAA\",\"ignoreList\":[]}",
  version: "3.12.0"
};
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
  foo: function () {
    const _e = [new global.Error(), 1, -27];
    const foo = function () {
      const a = {
        b() {}
      };
    };
    foo.__closure = {};
    foo.__workletHash = 9586549089085;
    foo.__initData = _worklet_9586549089085_init_data;
    foo.__stackDetails = _e;
    return foo;
  }(),
  bar: function () {
    const _e = [new global.Error(), 1, -27];
    const bar = function () {};
    bar.__closure = {};
    bar.__workletHash = 7147588349779;
    bar.__initData = _worklet_7147588349779_init_data;
    bar.__stackDetails = _e;
    return bar;
  }()
};
