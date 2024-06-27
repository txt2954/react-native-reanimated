function _toPrimitive(t, r) { "worklet"; if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toPropertyKey(t) { "worklet"; var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _classCallCheck(instance, Constructor) { "worklet"; if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { "worklet"; for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { "worklet"; if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
let ExpensiMark = /*#__PURE__*/function () {
  function ExpensiMark() {
    "worklet";

    _classCallCheck(this, ExpensiMark);
  }
  return _createClass(ExpensiMark, [{
    key: "method",
    value: function method() {}
  }]);
}();
const ExpensiMarkClassFucktory = function () {
  "worklet";

  function ExpensiMark() {
    _classCallCheck(this, ExpensiMark);
  }
  return _createClass(ExpensiMark, [{
    key: "method",
    value: function method() {}
  }]);
};
