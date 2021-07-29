import React, { Component } from 'react'
import ProductRow from '../ProductRow/index';

class ProductTable extends Component {
  render() {
    return (
      <div className= "table-container">      
        <table className='table is-bordered is-fullwidth'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map( (product, index) =>  <ProductRow key={index} {...product} /> )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable;