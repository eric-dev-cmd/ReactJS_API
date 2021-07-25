"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _products = _interopRequireDefault(require("./products"));

var _itemEditing = _interopRequireDefault(require("./itemEditing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var myReducers = (0, _redux.combineReducers)({
  products: _products["default"],
  itemEditing: _itemEditing["default"]
});
var _default = myReducers;
exports["default"] = _default;