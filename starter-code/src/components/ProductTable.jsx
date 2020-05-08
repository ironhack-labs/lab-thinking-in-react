import React, { Component } from 'react';
import ProductRow from './ProductRow';


export class ProductTable extends Component {

  render() {
    return (
      <div className="product-table">
        <table>
          <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
          </thead>
      
            <ProductRow data={this.props.data}/>
       
        </table>

    
      </div>
    );
  }
}

export default ProductTable;
