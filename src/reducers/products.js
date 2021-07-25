import * as Types from "./../constants/ActionTypes";
var initialState = [];
const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      console.log(action);
      state = action.products;
      return [...state];
    case Types.DELETE_PRODUCT:
      console.log(action);
      return state;
    default:
      return [...state];
  }
};
export default products;
