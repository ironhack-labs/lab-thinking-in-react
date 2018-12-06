import React, { Component } from 'react'
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow'
import "../../data.json"
import ProductRow from '../ProductRow/ProductRow'

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
  <tr>
    <th>Name</th>
    <th>Price</th> 

  </tr>
  <tr>
   <ProductCategoryRow />
   <ProductRow /> 
  </tr>
  <tr>
   
  </tr>
</table>
      </div>
    )
  }
}
