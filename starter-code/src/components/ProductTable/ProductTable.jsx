import React, { Component } from 'react';
import './ProductTable.css';
import ProductRow from '../ProductRow/ProductRow'

class ProductTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="product-table">
        <tbody>
          <tr className="table-header">
            <th>Name</th>
            <th>Price</th>
          </tr>
          {this.props.data.map((row, index) => {
            return <ProductRow data={row} key={index} />
          })}
        </tbody>
      </table>
    )
  }
}

export default ProductTable;