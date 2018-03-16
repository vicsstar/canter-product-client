import React, { Component } from 'react';
import './EmptyList.css';

class EmptyList extends Component {
  render() {
    return (
      <tr className="product-list-empty">
        <td colSpan="5" className="text-center">
          <p>{this.props.message}</p>
        </td>
      </tr>
    )
  }
}

export default EmptyList;