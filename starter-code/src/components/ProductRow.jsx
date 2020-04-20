import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    return (
      <div>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
        </tr>
      </div>
    );
  }
}

export default ProductRow;