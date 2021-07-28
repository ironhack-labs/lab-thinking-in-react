import React, { Component } from 'react'
import ProductRow from '../ProductRow/index';

class ProductTable extends Component {
  render() {
    return (
      <div className= "columns is-flex is-justify-content-center">
        <table className=''>
          <thead className=''>
            <tr className= ''>
              <th className=''>Name</th>
              <th className=''>Price</th>
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

export default ProductTable
