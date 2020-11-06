import React, { Component } from 'react';

import './ProductTable.css';

import ProductRow from '../ProductRow/ProductRow';

class ProductTable extends Component {
  state = {
    quantity: 1,
  }

  render() {
    return (
      <div className="ProductTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => {
              return (
                <ProductRow key={product.id} product={product} />
              );
            })
            }
          </tbody>
        </table>
      </div>
    );
  };
};

export default ProductTable;
