import React, { Component } from "react";
import {CatagoryElectronics, CatagorySports} from './ProductCategoryRow/ProductCategoryRow'
import {ProductSport, ProductElectric} from './ProductCategoryRow/ProductRow'

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.categories)
  }

  render(){
    return(
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      <CatagorySports />
      <ProductSport data={this.props.categories}/>
      <CatagoryElectronics />
      <ProductElectric data={this.props.categories} />
      </tbody>
    </table>
    )
  }
}

export default ProductTable;