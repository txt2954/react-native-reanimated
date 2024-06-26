function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// import App from '../app';
import { useEffect } from 'react';
import { runOnUI, flattenArray } from 'react-native-reanimated';
function crazyWorklet() {
  'worklet';

  const arr = [[1], [2]];
  let Clazz = /*#__PURE__*/_createClass(function Clazz() {
    _classCallCheck(this, Clazz);
  });
  const clazz = new Clazz();
  console.log(arr);
  const flatArr = flattenArray(arr);
  console.log(flatArr);
}
export default function Dupsko() {
  useEffect(() => {
    runOnUI(crazyWorklet)();
  });
  return null;
}
