import React, { Component } from 'react';
import ProductRow from '../components/ProductRow';

class ProductTable extends Component {

  render() {
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {this.props.filterProducts.map((elm, idx) => {
            return (
              <ProductRow
                name={elm.name}
                price={elm.price}
                stocked={elm.stocked}
                key={idx}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default ProductTable;
