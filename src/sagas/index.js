import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../action-types';

const apiUrl = 'http://localhost:9000/products';

function* watchAll(params) {
  yield all([
    takeEvery(types.FETCH_PRODUCTS, action => {
      // fetch the list of products.
      fetch(apiUrl)
        .then(value => value.json())
        .then(products => {
          params.store.dispatch({
            type: types.LIST_PRODUCTS,
            products
          });
        });
    }),
    takeEvery(types.CREATE_PRODUCT, action => {
      const product = action.product;

      // save product on the server.
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(product)
      })
      .then(value => value.json())
      .then(product => {
        params.store.dispatch({
          type: types.CREATED_PRODUCT,
          product
        });
      });
    }),
    takeEvery(types.DELETE_PRODUCT, action => {
      const product = action.product;

      // delete the product.
      fetch(`${apiUrl}/${product.id}`, {
        method: 'DELETE'
      })
      .then(value => value.json())
      .then(data => {
        params.store.dispatch({
          type: types.DELETED_PRODUCT,
          product
        });
      });
    })
  ]);
}

export default watchAll;