import * as Types from "./../constants/ActionTypes";
import callApi from "./../utils/apiCaller";

//Get all data
export const actFetchProductsRequestAPI = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};

// Delete product on api && redux => Delete on server, then delete tren store

export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id,
  };
};
export const actDeleteProductRequestAPI = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeleteProduct(id));
    });
  };
};

// Add product

export const actAddProductRequestAPI = (product) => {
  return (dispatch) => {
    return callApi("products", "POST", product).then((res) => {
      dispatch(actAddProduct(res.data));
    });
  };
};
export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product,
  };
};

// Edit product

export const actGetProductRequestAPI = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "GET", null).then((res) => {
      dispatch(actGetProduct(res.data));
    });
  };
};
//Get product in store
export const actGetProduct = (product) => {
  return {
    type: Types.EDIT_PRODUCT,
    product,
  };
};

// Update product
export const actUpdateProductRequestAPI = (product) => {
  return (dispatch) => {
    return callApi(`products/${product.id}`, "PUT", product).then((res) => {
      dispatch(actUpdateProduct(res.data));
    });
  };
};
//Get product in store
export const actUpdateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product,
  };
};

export const TOGGLE_STATUS = () => {
    return {
      type: Types.TOGGLE_STATUS,
    };
  };