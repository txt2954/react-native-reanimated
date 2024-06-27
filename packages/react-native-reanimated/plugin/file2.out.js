const _worklet_4914514148035_init_data = {
  code: "function _toPrimitive(t,r){if(\"object\"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||\"default\");if(\"object\"!=typeof i)return i;throw new TypeError(\"@@toPrimitive must return a primitive value.\");}return(\"string\"===r?String:Number)(t);}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"_toPrimitive\",\"t\",\"r\",\"e\",\"Symbol\",\"toPrimitive\",\"i\",\"call\",\"TypeError\",\"String\",\"Number\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AAAA,SAAAA,YAASA,CAAaC,CAAC,CAAAC,CAAG,EAAe,GAAI,QAAQ,EAAI,MAAO,CAAAD,CAAC,EAAI,CAACA,CAAC,CAAE,MAAO,CAAAA,CAAC,CAAE,GAAI,CAAAE,CAAC,CAAGF,CAAC,CAACG,MAAM,CAACC,WAAW,CAAC,CAAE,GAAI,IAAK,EAAC,GAAKF,CAAC,CAAE,CAAE,GAAI,CAAAG,CAAC,CAAGH,CAAC,CAACI,IAAI,CAACN,CAAC,CAAEC,CAAC,EAAI,SAAS,CAAC,CAAE,GAAI,QAAQ,EAAI,MAAO,CAAAI,CAAC,CAAE,MAAO,CAAAA,CAAC,CAAE,KAAM,IAAI,CAAAE,SAAS,CAAC,8CAA8C,CAAC,CAAE,CAAE,MAAO,CAAC,QAAQ,GAAKN,CAAC,CAAGO,MAAM,CAAGC,MAAM,EAAET,CAAC,CAAC,CAAE\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const _toPrimitive = function () {
  const _e = [new global.Error(), 1, -27];
  const _toPrimitive = function (t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  };
  _toPrimitive.__closure = {};
  _toPrimitive.__workletHash = 4914514148035;
  _toPrimitive.__initData = _worklet_4914514148035_init_data;
  _toPrimitive.__stackDetails = _e;
  return _toPrimitive;
}();
const _worklet_14183653944217_init_data = {
  code: "function _toPropertyKey(t){const{_toPrimitive}=this.__closure;var i=_toPrimitive(t,\"string\");return\"symbol\"==typeof i?i:i+\"\";}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"_toPropertyKey\",\"t\",\"_toPrimitive\",\"__closure\",\"i\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AACA,SAAAA,cAASA,CAAeC,CAAC,QAAAC,YAAA,OAAAC,SAAA,CAAe,GAAI,CAAAC,CAAC,CAAGF,YAAY,CAACD,CAAC,CAAE,QAAQ,CAAC,CAAE,MAAO,QAAQ,EAAI,MAAO,CAAAG,CAAC,CAAGA,CAAC,CAAGA,CAAC,CAAG,EAAE,CAAE\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const _toPropertyKey = function () {
  const _e = [new global.Error(), -2, -27];
  const _toPropertyKey = function (t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  };
  _toPropertyKey.__closure = {
    _toPrimitive
  };
  _toPropertyKey.__workletHash = 14183653944217;
  _toPropertyKey.__initData = _worklet_14183653944217_init_data;
  _toPropertyKey.__stackDetails = _e;
  return _toPropertyKey;
}();
const _worklet_17099703587270_init_data = {
  code: "function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"_classCallCheck\",\"instance\",\"Constructor\",\"TypeError\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AAEA,SAAAA,eAASA,CAAgBC,QAAA,CAAQC,WAAE,CAAW,CAAe,GAAI,EAAED,QAAQ,WAAY,CAAAC,WAAW,CAAC,CAAE,CAAE,KAAM,IAAI,CAAAC,SAAS,CAAC,mCAAmC,CAAC,CAAE,CAAE\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const _classCallCheck = function () {
  const _e = [new global.Error(), 1, -27];
  const _classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  _classCallCheck.__closure = {};
  _classCallCheck.__workletHash = 17099703587270;
  _classCallCheck.__initData = _worklet_17099703587270_init_data;
  _classCallCheck.__stackDetails = _e;
  return _classCallCheck;
}();
const _worklet_7208792264399_init_data = {
  code: "function _defineProperties(target,props){const{_toPropertyKey}=this.__closure;for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor);}}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"_defineProperties\",\"target\",\"props\",\"_toPropertyKey\",\"__closure\",\"i\",\"length\",\"descriptor\",\"enumerable\",\"configurable\",\"writable\",\"Object\",\"defineProperty\",\"key\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AAGA,SAAAA,iBAASA,CAAkBC,MAAA,CAAMC,KAAE,CAAK,OAAAC,cAAA,OAAAC,SAAA,CAAe,IAAK,GAAI,CAAAC,CAAC,CAAG,CAAC,CAAEA,CAAC,CAAGH,KAAK,CAACI,MAAM,CAAED,CAAC,EAAE,CAAE,CAAE,GAAI,CAAAE,UAAU,CAAGL,KAAK,CAACG,CAAC,CAAC,CAAEE,UAAU,CAACC,UAAU,CAAGD,UAAU,CAACC,UAAU,EAAI,KAAK,CAAED,UAAU,CAACE,YAAY,CAAG,IAAI,CAAE,GAAI,OAAO,EAAI,CAAAF,UAAU,CAAEA,UAAU,CAACG,QAAQ,CAAG,IAAI,CAAEC,MAAM,CAACC,cAAc,CAACX,MAAM,CAAEE,cAAc,CAACI,UAAU,CAACM,GAAG,CAAC,CAAEN,UAAU,CAAC,CAAE,CAAE\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const _defineProperties = function () {
  const _e = [new global.Error(), -2, -27];
  const _defineProperties = function (target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  };
  _defineProperties.__closure = {
    _toPropertyKey
  };
  _defineProperties.__workletHash = 7208792264399;
  _defineProperties.__initData = _worklet_7208792264399_init_data;
  _defineProperties.__stackDetails = _e;
  return _defineProperties;
}();
const _worklet_10605373819257_init_data = {
  code: "function _createClass(Constructor,protoProps,staticProps){const{_defineProperties}=this.__closure;if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,\"prototype\",{writable:false});return Constructor;}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"_createClass\",\"Constructor\",\"protoProps\",\"staticProps\",\"_defineProperties\",\"__closure\",\"prototype\",\"Object\",\"defineProperty\",\"writable\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AAIA,SAAAA,YAASA,CAAaC,WAAA,CAAWC,UAAE,CAAUC,WAAE,CAAW,OAAAC,iBAAA,OAAAC,SAAA,CAAe,GAAIH,UAAU,CAAEE,iBAAiB,CAACH,WAAW,CAACK,SAAS,CAAEJ,UAAU,CAAC,CAAE,GAAIC,WAAW,CAAEC,iBAAiB,CAACH,WAAW,CAAEE,WAAW,CAAC,CAAEI,MAAM,CAACC,cAAc,CAACP,WAAW,CAAE,WAAW,CAAE,CAAEQ,QAAQ,CAAE,KAAM,CAAC,CAAC,CAAE,MAAO,CAAAR,WAAW,CAAE\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const _createClass = function () {
  const _e = [new global.Error(), -2, -27];
  const _createClass = function (Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  };
  _createClass.__closure = {
    _defineProperties
  };
  _createClass.__workletHash = 10605373819257;
  _createClass.__initData = _worklet_10605373819257_init_data;
  _createClass.__stackDetails = _e;
  return _createClass;
}();
const _worklet_11260153874593_init_data = {
  code: "function ExpensiMarkSubClass(){const ExpensiMarkSubClass=this._recur;const{_classCallCheck}=this.__closure;_classCallCheck(this,ExpensiMarkSubClass);this.pupa=1;}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"ExpensiMarkSubClass\",\"_recur\",\"_classCallCheck\",\"__closure\",\"pupa\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AAME,SAAAA,mBAASA,CAAA,CAAmB,OAAAA,mBAAA,MAAAC,MAAA,OAAAC,eAAA,OAAAC,SAAA,CAG1BD,eAAe,CAAC,IAAI,CAAEF,mBAAmB,CAAC,CAC1C,IAAI,CAACI,IAAI,CAAG,CAAC,CACf\",\"ignoreList\":[]}",
  version: "3.12.0"
};
let ExpensiMarkSubClass = /*#__PURE__*/function () {
  const ExpensiMarkSubClass = function () {
    const _e = [new global.Error(), -2, -27];
    const ExpensiMarkSubClass = function () {
      _classCallCheck(this, ExpensiMarkSubClass);
      this.pupa = 1;
    };
    ExpensiMarkSubClass.__closure = {
      _classCallCheck
    };
    ExpensiMarkSubClass.__workletHash = 11260153874593;
    ExpensiMarkSubClass.__initData = _worklet_11260153874593_init_data;
    ExpensiMarkSubClass.__stackDetails = _e;
    return ExpensiMarkSubClass;
  }();
  return _createClass(ExpensiMarkSubClass, [{
    key: "method",
    value: function method() {
      console.log('Hello from ' + global._WORKLET);
      this.pupa += 1;
      console.log('this.pupa');
      console.log(this.pupa);
    }
  }]);
}();
const _worklet_6765880296203_init_data = {
  code: "function anonymous(){const{_classCallCheck,_createClass}=this.__closure;function ExpensiMarkSubClass(){_classCallCheck(this,ExpensiMarkSubClass);this.pupa=1;}return _createClass(ExpensiMarkSubClass,[{key:\"method\",value:function method(){console.log('Hello from '+global._WORKLET);this.pupa+=1;console.log('this.pupa');console.log(this.pupa);}}]);}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"anonymous\",\"_classCallCheck\",\"_createClass\",\"__closure\",\"ExpensiMarkSubClass\",\"pupa\",\"key\",\"value\",\"method\",\"console\",\"log\",\"global\",\"_WORKLET\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AAsByC,SAAAA,SAAYA,CAAA,QAAAC,eAAA,CAAAC,YAAA,OAAAC,SAAA,CAGnD,QAAS,CAAAC,mBAAmBA,CAAA,CAAG,CAC7BH,eAAe,CAAC,IAAI,CAAEG,mBAAmB,CAAC,CAC1C,IAAI,CAACC,IAAI,CAAG,CAAC,CACf,CACA,MAAO,CAAAH,YAAY,CAACE,mBAAmB,CAAE,CAAC,CACxCE,GAAG,CAAE,QAAQ,CACbC,KAAK,CAAE,QAAS,CAAAC,MAAMA,CAAA,CAAG,CACvBC,OAAO,CAACC,GAAG,CAAC,aAAa,CAAGC,MAAM,CAACC,QAAQ,CAAC,CAC5C,IAAI,CAACP,IAAI,EAAI,CAAC,CACdI,OAAO,CAACC,GAAG,CAAC,WAAW,CAAC,CACxBD,OAAO,CAACC,GAAG,CAAC,IAAI,CAACL,IAAI,CAAC,CACxB,CACF,CAAC,CAAC,CAAC,CACL\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const ExpensiMarkSubClassClassFucktory = function () {
  const _e = [new global.Error(), -3, -27];
  const anonymous = function () {
    function ExpensiMarkSubClass() {
      _classCallCheck(this, ExpensiMarkSubClass);
      this.pupa = 1;
    }
    return _createClass(ExpensiMarkSubClass, [{
      key: "method",
      value: function method() {
        console.log('Hello from ' + global._WORKLET);
        this.pupa += 1;
        console.log('this.pupa');
        console.log(this.pupa);
      }
    }]);
  };
  anonymous.__closure = {
    _classCallCheck,
    _createClass
  };
  anonymous.__workletHash = 6765880296203;
  anonymous.__initData = _worklet_6765880296203_init_data;
  anonymous.__stackDetails = _e;
  return anonymous;
}();
const _worklet_4914514148035_init_data = {
  code: "function _toPrimitive(t,r){if(\"object\"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||\"default\");if(\"object\"!=typeof i)return i;throw new TypeError(\"@@toPrimitive must return a primitive value.\");}return(\"string\"===r?String:Number)(t);}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"_toPrimitive\",\"t\",\"r\",\"e\",\"Symbol\",\"toPrimitive\",\"i\",\"call\",\"TypeError\",\"String\",\"Number\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AAAA,SAAAA,YAASA,CAAaC,CAAC,CAAAC,CAAG,EAAe,GAAI,QAAQ,EAAI,MAAO,CAAAD,CAAC,EAAI,CAACA,CAAC,CAAE,MAAO,CAAAA,CAAC,CAAE,GAAI,CAAAE,CAAC,CAAGF,CAAC,CAACG,MAAM,CAACC,WAAW,CAAC,CAAE,GAAI,IAAK,EAAC,GAAKF,CAAC,CAAE,CAAE,GAAI,CAAAG,CAAC,CAAGH,CAAC,CAACI,IAAI,CAACN,CAAC,CAAEC,CAAC,EAAI,SAAS,CAAC,CAAE,GAAI,QAAQ,EAAI,MAAO,CAAAI,CAAC,CAAE,MAAO,CAAAA,CAAC,CAAE,KAAM,IAAI,CAAAE,SAAS,CAAC,8CAA8C,CAAC,CAAE,CAAE,MAAO,CAAC,QAAQ,GAAKN,CAAC,CAAGO,MAAM,CAAGC,MAAM,EAAET,CAAC,CAAC,CAAE\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const _toPrimitive = function () {
  const _e = [new global.Error(), 1, -27];
  const _toPrimitive = function (t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  };
  _toPrimitive.__closure = {};
  _toPrimitive.__workletHash = 4914514148035;
  _toPrimitive.__initData = _worklet_4914514148035_init_data;
  _toPrimitive.__stackDetails = _e;
  return _toPrimitive;
}();
const _worklet_14183653944217_init_data = {
  code: "function _toPropertyKey(t){const{_toPrimitive}=this.__closure;var i=_toPrimitive(t,\"string\");return\"symbol\"==typeof i?i:i+\"\";}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"_toPropertyKey\",\"t\",\"_toPrimitive\",\"__closure\",\"i\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AACA,SAAAA,cAASA,CAAeC,CAAC,QAAAC,YAAA,OAAAC,SAAA,CAAe,GAAI,CAAAC,CAAC,CAAGF,YAAY,CAACD,CAAC,CAAE,QAAQ,CAAC,CAAE,MAAO,QAAQ,EAAI,MAAO,CAAAG,CAAC,CAAGA,CAAC,CAAGA,CAAC,CAAG,EAAE,CAAE\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const _toPropertyKey = function () {
  const _e = [new global.Error(), -2, -27];
  const _toPropertyKey = function (t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  };
  _toPropertyKey.__closure = {
    _toPrimitive
  };
  _toPropertyKey.__workletHash = 14183653944217;
  _toPropertyKey.__initData = _worklet_14183653944217_init_data;
  _toPropertyKey.__stackDetails = _e;
  return _toPropertyKey;
}();
const _worklet_17099703587270_init_data = {
  code: "function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"_classCallCheck\",\"instance\",\"Constructor\",\"TypeError\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AAEA,SAAAA,eAASA,CAAgBC,QAAA,CAAQC,WAAE,CAAW,CAAe,GAAI,EAAED,QAAQ,WAAY,CAAAC,WAAW,CAAC,CAAE,CAAE,KAAM,IAAI,CAAAC,SAAS,CAAC,mCAAmC,CAAC,CAAE,CAAE\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const _classCallCheck = function () {
  const _e = [new global.Error(), 1, -27];
  const _classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  _classCallCheck.__closure = {};
  _classCallCheck.__workletHash = 17099703587270;
  _classCallCheck.__initData = _worklet_17099703587270_init_data;
  _classCallCheck.__stackDetails = _e;
  return _classCallCheck;
}();
const _worklet_7208792264399_init_data = {
  code: "function _defineProperties(target,props){const{_toPropertyKey}=this.__closure;for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor);}}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"_defineProperties\",\"target\",\"props\",\"_toPropertyKey\",\"__closure\",\"i\",\"length\",\"descriptor\",\"enumerable\",\"configurable\",\"writable\",\"Object\",\"defineProperty\",\"key\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AAGA,SAAAA,iBAASA,CAAkBC,MAAA,CAAMC,KAAE,CAAK,OAAAC,cAAA,OAAAC,SAAA,CAAe,IAAK,GAAI,CAAAC,CAAC,CAAG,CAAC,CAAEA,CAAC,CAAGH,KAAK,CAACI,MAAM,CAAED,CAAC,EAAE,CAAE,CAAE,GAAI,CAAAE,UAAU,CAAGL,KAAK,CAACG,CAAC,CAAC,CAAEE,UAAU,CAACC,UAAU,CAAGD,UAAU,CAACC,UAAU,EAAI,KAAK,CAAED,UAAU,CAACE,YAAY,CAAG,IAAI,CAAE,GAAI,OAAO,EAAI,CAAAF,UAAU,CAAEA,UAAU,CAACG,QAAQ,CAAG,IAAI,CAAEC,MAAM,CAACC,cAAc,CAACX,MAAM,CAAEE,cAAc,CAACI,UAAU,CAACM,GAAG,CAAC,CAAEN,UAAU,CAAC,CAAE,CAAE\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const _defineProperties = function () {
  const _e = [new global.Error(), -2, -27];
  const _defineProperties = function (target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  };
  _defineProperties.__closure = {
    _toPropertyKey
  };
  _defineProperties.__workletHash = 7208792264399;
  _defineProperties.__initData = _worklet_7208792264399_init_data;
  _defineProperties.__stackDetails = _e;
  return _defineProperties;
}();
const _worklet_10605373819257_init_data = {
  code: "function _createClass(Constructor,protoProps,staticProps){const{_defineProperties}=this.__closure;if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,\"prototype\",{writable:false});return Constructor;}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"_createClass\",\"Constructor\",\"protoProps\",\"staticProps\",\"_defineProperties\",\"__closure\",\"prototype\",\"Object\",\"defineProperty\",\"writable\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AAIA,SAAAA,YAASA,CAAaC,WAAA,CAAWC,UAAE,CAAUC,WAAE,CAAW,OAAAC,iBAAA,OAAAC,SAAA,CAAe,GAAIH,UAAU,CAAEE,iBAAiB,CAACH,WAAW,CAACK,SAAS,CAAEJ,UAAU,CAAC,CAAE,GAAIC,WAAW,CAAEC,iBAAiB,CAACH,WAAW,CAAEE,WAAW,CAAC,CAAEI,MAAM,CAACC,cAAc,CAACP,WAAW,CAAE,WAAW,CAAE,CAAEQ,QAAQ,CAAE,KAAM,CAAC,CAAC,CAAE,MAAO,CAAAR,WAAW,CAAE\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const _createClass = function () {
  const _e = [new global.Error(), -2, -27];
  const _createClass = function (Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  };
  _createClass.__closure = {
    _defineProperties
  };
  _createClass.__workletHash = 10605373819257;
  _createClass.__initData = _worklet_10605373819257_init_data;
  _createClass.__stackDetails = _e;
  return _createClass;
}();
const _worklet_16608966582762_init_data = {
  code: "function ExpensiMark(){const ExpensiMark=this._recur;const{_classCallCheck,ExpensiMarkSubClass}=this.__closure;_classCallCheck(this,ExpensiMark);this.dupa=1;this.subClass=new ExpensiMarkSubClass();}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"ExpensiMark\",\"_recur\",\"_classCallCheck\",\"ExpensiMarkSubClass\",\"__closure\",\"dupa\",\"subClass\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AAME,SAAAA,WAASA,CAAA,CAAW,OAAAA,WAAA,MAAAC,MAAA,OAAAC,eAAA,CAAAC,mBAAA,OAAAC,SAAA,CAGlBF,eAAe,CAAC,IAAI,CAAEF,WAAW,CAAC,CAClC,IAAI,CAACK,IAAI,CAAG,CAAC,CACb,IAAI,CAACC,QAAQ,CAAG,GAAI,CAAAH,mBAAmB,CAAC,CAAC,CAC3C\",\"ignoreList\":[]}",
  version: "3.12.0"
};
let ExpensiMark = /*#__PURE__*/function () {
  const ExpensiMark = function () {
    const _e = [new global.Error(), -3, -27];
    const ExpensiMark = function () {
      _classCallCheck(this, ExpensiMark);
      this.dupa = 1;
      this.subClass = new ExpensiMarkSubClass();
    };
    ExpensiMark.__closure = {
      _classCallCheck,
      ExpensiMarkSubClass
    };
    ExpensiMark.__workletHash = 16608966582762;
    ExpensiMark.__initData = _worklet_16608966582762_init_data;
    ExpensiMark.__stackDetails = _e;
    return ExpensiMark;
  }();
  return _createClass(ExpensiMark, [{
    key: "method",
    value: function method() {
      console.log('Hello from ' + global._WORKLET);
      this.dupa += 1;
      console.log(this.dupa);
      this.subClass.method();
    }
  }]);
}();
const _worklet_1924641862770_init_data = {
  code: "function anonymous(){const{_classCallCheck,ExpensiMarkSubClass,_createClass}=this.__closure;function ExpensiMark(){_classCallCheck(this,ExpensiMark);this.dupa=1;this.subClass=new ExpensiMarkSubClass();}return _createClass(ExpensiMark,[{key:\"method\",value:function method(){console.log('Hello from '+global._WORKLET);this.dupa+=1;console.log(this.dupa);this.subClass.method();}}]);}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"anonymous\",\"_classCallCheck\",\"ExpensiMarkSubClass\",\"_createClass\",\"__closure\",\"ExpensiMark\",\"dupa\",\"subClass\",\"key\",\"value\",\"method\",\"console\",\"log\",\"global\",\"_WORKLET\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AAuBiC,SAAAA,SAAYA,CAAA,QAAAC,eAAA,CAAAC,mBAAA,CAAAC,YAAA,OAAAC,SAAA,CAG3C,QAAS,CAAAC,WAAWA,CAAA,CAAG,CACrBJ,eAAe,CAAC,IAAI,CAAEI,WAAW,CAAC,CAClC,IAAI,CAACC,IAAI,CAAG,CAAC,CACb,IAAI,CAACC,QAAQ,CAAG,GAAI,CAAAL,mBAAmB,CAAC,CAAC,CAC3C,CACA,MAAO,CAAAC,YAAY,CAACE,WAAW,CAAE,CAAC,CAChCG,GAAG,CAAE,QAAQ,CACbC,KAAK,CAAE,QAAS,CAAAC,MAAMA,CAAA,CAAG,CACvBC,OAAO,CAACC,GAAG,CAAC,aAAa,CAAGC,MAAM,CAACC,QAAQ,CAAC,CAC5C,IAAI,CAACR,IAAI,EAAI,CAAC,CACdK,OAAO,CAACC,GAAG,CAAC,IAAI,CAACN,IAAI,CAAC,CACtB,IAAI,CAACC,QAAQ,CAACG,MAAM,CAAC,CAAC,CACxB,CACF,CAAC,CAAC,CAAC,CACL\",\"ignoreList\":[]}",
  version: "3.12.0"
};
const ExpensiMarkClassFucktory = function () {
  const _e = [new global.Error(), -4, -27];
  const anonymous = function () {
    function ExpensiMark() {
      _classCallCheck(this, ExpensiMark);
      this.dupa = 1;
      this.subClass = new ExpensiMarkSubClass();
    }
    return _createClass(ExpensiMark, [{
      key: "method",
      value: function method() {
        console.log('Hello from ' + global._WORKLET);
        this.dupa += 1;
        console.log(this.dupa);
        this.subClass.method();
      }
    }]);
  };
  anonymous.__closure = {
    _classCallCheck,
    ExpensiMarkSubClass,
    _createClass
  };
  anonymous.__workletHash = 1924641862770;
  anonymous.__initData = _worklet_1924641862770_init_data;
  anonymous.__stackDetails = _e;
  return anonymous;
}();
const _worklet_15910679718223_init_data = {
  code: "function callback(){const{ExpensiMarkClassFucktory,ExpensiMarkSubClassClassFucktory}=this.__closure;const ExpensiMarkSubClass=ExpensiMarkSubClassClassFucktory();const ExpensiMark=ExpensiMarkClassFucktory();const expensiMark=new ExpensiMark();expensiMark.method();expensiMark.method();}",
  location: "/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js",
  sourceMap: "{\"version\":3,\"names\":[\"callback\",\"ExpensiMarkClassFucktory\",\"ExpensiMarkSubClassClassFucktory\",\"__closure\",\"ExpensiMarkSubClass\",\"ExpensiMark\",\"expensiMark\",\"method\"],\"sources\":[\"/Users/bigpoppe/swmansion/reanimated/monorepo/react-native-reanimated-monorepo/packages/react-native-reanimated/plugin/file.js\"],\"mappings\":\"AA0BE,SAAAA,QAASA,CAAA,CAAQ,OAAAC,wBAAA,CAAAC,gCAAA,OAAAC,SAAA,CAGf,KAAM,CAAAC,mBAAkB,CAAAF,gCAAa,GACrC,MAAAG,WAAY,CAAQJ,wBAAA,GACpB,MAAAK,WAAY,CAAQ,IAAAD,WAAA,GACtBC,WAAA,CAAAC,MAAA,G\",\"ignoreList\":[]}",
  version: "3.12.0"
};
export default function App() {
  const callback = function () {
    const _e = [new global.Error(), -4, -27];
    const callback = function () {
      const expensiMark = new ExpensiMark();
      expensiMark.method();
      expensiMark.method();
    };
    callback.__closure = {
      ExpensiMark,
      ExpensiMarkClassFucktory,
      ExpensiMarkSubClassClassFucktory
    };
    callback.__workletHash = 15910679718223;
    callback.__initData = _worklet_15910679718223_init_data;
    callback.__stackDetails = _e;
    return callback;
  }();
  makeShareableCloneRecursive(callback);
  runOnUI(callback)();
  return null;
}
