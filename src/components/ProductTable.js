import React, { Component } from 'react';
import './PT.css';

import ProductRows from '../components/ProductRows.js';

class ProductTable extends Component {
  render() {
    return (
      <div className="productTable">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <ProductRows
            products={this.props.products}
            queryForFilteringSecondLevel={
              this.props.queryForFilteringFirstLevel
            }
          />
        </table>
      </div>
    );
  }
}

export default ProductTable;
