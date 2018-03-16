import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Product from './Product';
import EmptyList from './EmptyList';
import * as types from '../action-types';
import './ProductList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  componentWillUpdate(nextState) {
    if (nextState.products !== this.state.products) {
      this.setState({
        products: nextState.products
      });
    }
  }

  render() {
    let products;

    if (this.state.products.length !== 0) {
      products = this.state.products.map(product => (
        <Product key={product.id} product={product} onDeleteProduct={this.props.deleteProduct} />
      ));
    }

    return (
      <div>
        <div className="clearfix">
          <h2 className="pull-left">PRODUCT LIST</h2>
          <div className="alert alert-danger pull-right">
            <strong>Warning!</strong> 0 Online user(s).
          </div>
        </div>
        <div className="product-list clearfix">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Code</th>
                <th>Category</th>
                <th>Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { products || <EmptyList message="You do not have any products to show."/> }
            </tbody>
          </table>
          <a href="/create-product" className="btn btn-lg btn-success pull-right">Add new</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch({
    type: types.FETCH_PRODUCTS
  }),
  deleteProduct: (product) => dispatch({
    type: types.DELETE_PRODUCT,
    product
  })
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductList));
