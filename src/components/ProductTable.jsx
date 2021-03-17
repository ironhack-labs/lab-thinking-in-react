import React, { Component } from 'react';
import ProductRow from './ProductRow';

export class ProductTable extends Component {

  render() {
    return (
      <div>
        <div>
          <table id="table-complex" class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
                <ProductRow product= {this.props.products}/>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductTable;
