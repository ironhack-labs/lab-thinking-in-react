import React, { Component } from 'react';

import Product from  './Product';

class ProductTable extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    return (
      <table>
        <th>
          <td>Name</td>
          <td>Price</td>
        </th>
        <Product />
      </table>
    )
  }
}

export default ProductTable;