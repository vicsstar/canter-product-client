import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    const productName = this.props.product.name;

    if (window.confirm(`Sure you want to delete this product: ${productName}?`)) {
      this.props.onDeleteProduct(this.props.product);
    }
  }

  render() {
    return (
      <tr>
        <td>{this.props.product.code}</td>
        <td>{this.props.product.category}</td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
        <td width="150">
          <a href={`/products/${this.props.product.id}`} className="btn btn-primary btn-sm">Edit</a>
          &nbsp;
          <button className="btn btn-danger btn-sm" onClick={this.delete}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Product;
