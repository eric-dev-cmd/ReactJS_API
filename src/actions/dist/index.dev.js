"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actAddProduct = exports.actAddProductRequestAPI = exports.actDeleteProductRequestAPI = exports.actDeleteProduct = exports.actFetchProducts = exports.actFetchProductsRequestAPI = void 0;

var Types = _interopRequireWildcard(require("./../constants/ActionTypes"));

var _apiCaller = _interopRequireDefault(require("./../utils/apiCaller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//Get all data
var actFetchProductsRequestAPI = function actFetchProductsRequestAPI() {
  return function (dispatch) {
    return (0, _apiCaller["default"])("products", "GET", null).then(function (res) {
      dispatch(actFetchProducts(res.data));
    });
  };
};

exports.actFetchProductsRequestAPI = actFetchProductsRequestAPI;

var actFetchProducts = function actFetchProducts(products) {
  return {
    type: Types.FETCH_PRODUCTS,
    products: products
  };
}; // Delete product on api && redux => Delete on server, then delete tren store


exports.actFetchProducts = actFetchProducts;

var actDeleteProduct = function actDeleteProduct(id) {
  return {
    type: Types.DELETE_PRODUCT,
    id: id
  };
};

exports.actDeleteProduct = actDeleteProduct;

var actDeleteProductRequestAPI = function actDeleteProductRequestAPI(id) {
  return function (dispatch) {
    return (0, _apiCaller["default"])("products/".concat(id), "DELETE", null).then(function (res) {
      dispatch(actDeleteProduct(id));
    });
  };
}; // Add product


exports.actDeleteProductRequestAPI = actDeleteProductRequestAPI;

var actAddProductRequestAPI = function actAddProductRequestAPI(product) {
  return function (dispatch) {
    return (0, _apiCaller["default"])("products", "POST", product).then(function (res) {
      dispatch(actAddProduct(res.data));
    });
  };
};

exports.actAddProductRequestAPI = actAddProductRequestAPI;

var actAddProduct = function actAddProduct(product) {
  return {
    type: Types.ADD_PRODUCT,
    product: product
  };
};

exports.actAddProduct = actAddProduct;