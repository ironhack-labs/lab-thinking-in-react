import React, { Component } from 'react'
import ProductCategoryRow from '../FilterableProductTable/ProductTable/ProductCategoryRow/ProductCategoryRow'


export default class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
           <ProductCategoryRow/> 
        </table>
      </div>
    
    )
  }
}
