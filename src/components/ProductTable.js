import React, { Component } from 'react';
import ProductRow from './ProductRow';
import './ProductTable.css';


class ProductTable extends Component {
 
    render() {
      return (
        <>
          <table>
              <thead>
                <tr>
                 <th>Name</th>
                 <th>Price</th>
                </tr>
              </thead>

              <ProductRow filteredRow={this.props.filteredProducts}/>
                    
          </table>
        </>
      )
    }
}

export default ProductTable;