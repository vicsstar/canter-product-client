import * as types from '../action-types';

export default (state = {}, action) => {
  switch(action.type) {
    case types.LIST_PRODUCTS:
      return { products: action.products };
    case types.CREATED_PRODUCT:
      return Object.assign({}, { productUpdated: true }, ...state);
    case types.LEAVING_PRODUCT_SCREEN:
      return Object.assign({}, { productUpdated: false }, ...state);
    case types.DELETED_PRODUCT:
      const products = state.products.filter(p => p.id !== action.product.id);
      return { products };
    default:
      return state;
  }
};
