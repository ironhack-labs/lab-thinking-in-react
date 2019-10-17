import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {

  render() {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {this.props.productList.map((elem,idx) => <ProductRow key={idx} product = {elem}/>)}
      </table>
    );
  }
}
export default ProductTable;
