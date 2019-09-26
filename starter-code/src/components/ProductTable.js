import React, { Component } from 'react';
import ProductRow from "./ProductRow"

class ProductTable extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <ProductRow products={this.props.products} search={this.props.search} checkedState={this.props.checkedState}/>
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
