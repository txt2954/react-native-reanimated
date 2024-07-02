const c = 1;
const _worklet_12775787191813_init_data = {
  code: "function anonymous(){const{c}=this.__closure;return{foo:function(){console.log(c);console.log('foo');},bar:function(){console.log('bar');this.foo();}};}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/classCreation.js",
  sourceMap: "{\"version\":3,\"names\":[\"foo\",\"console\",\"log\",\"c\",\"bar\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/classCreation.js\"],\"mappings\":\"mDASY,CACVA,GAAG,SAAAA,CAAA,CAAG,CACJC,OAAO,CAACC,GAAG,CAACC,CAAC,CAAC,CACdF,OAAO,CAACC,GAAG,CAAC,KAAK,CAAC,CACpB,CAAC,CACDE,GAAG,SAAAA,CAAA,CAAG,CACJH,OAAO,CAACC,GAAG,CAAC,KAAK,CAAC,CAClB,IAAI,CAACF,GAAG,CAAC,CAAC,CACZ,CAEF,CAAC\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const obj = {
  foo() {
    console.log(c);
    console.log('foo');
  },
  bar() {
    console.log('bar');
    this.foo();
  },
  __workletObjectFactory: function () {
    const _e = [new global.Error(), -2, -27];
    const anonymous = function () {
      return {
        foo() {
          console.log(c);
          console.log('foo');
        },
        bar() {
          console.log('bar');
          this.foo();
        }
      };
    };
    anonymous.__closure = {
      c
    };
    anonymous.__workletHash = 12775787191813;
    anonymous.__initData = _worklet_12775787191813_init_data;
    anonymous.__stackDetails = _e;
    return anonymous;
  }()
};
obj.bar();
