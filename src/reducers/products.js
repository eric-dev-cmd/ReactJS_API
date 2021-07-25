import * as Types from "./../constants/ActionTypes";
var initialState = [];
var findIndexById = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};
const products = (state = initialState, action) => {
  var index = -1;
  var { id, product } = action;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      console.log(action);
      state = action.products;
      return [...state];
    case Types.DELETE_PRODUCT:
      console.log(action.id);
      index = findIndexById(state, id);
      state.splice(index, 1);
      return [...state];
    case Types.ADD_PRODUCT:
      console.log(action);
      state.push(action.product);
      return [...state];
    case Types.UPDATE_PRODUCT:
      console.log(action);
      index = findIndexById(state, product.id);
      state[index] = product;
      return [...state];
    default:
      return [...state];
  }
};
export default products;
