import React, { Component } from 'react';
import ProductRow from './ProductRow.js';

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Category</td>
              <td>in Stock?</td>
            </tr>
          </thead>

           <ProductRow products={this.props.products} />   
        
        </table>
        {/* <SearchBar /> */}
        
      </div>
    );
  }
}
