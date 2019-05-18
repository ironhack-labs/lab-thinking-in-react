//ProductTable.js

import React, { Component } from 'react';
import './ProductTable.css';
import ProductRow from './ProductRow.js';

class ProductTable extends Component {
  render() {
    
    let arrToRender1 = this.props.filteredData.map((data, index) => <ProductRow key={index} name={data.name} price={data.price} category={data.category} />)
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
            {this.children}
            {arrToRender1}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
