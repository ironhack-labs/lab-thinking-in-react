import React, { Component } from 'react';

import '../App.css';
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow';


class ProductTable extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return(
      <table>
        <tr>
          
        <th>Product</th>
        <th>Price</th>
        </tr>
        <ProductCategoryRow prodCategory={"Sporting Goods"} />
       {this.props.handleProducts("Sporting Goods")}
       <ProductCategoryRow prodCategory={"Electronics"}/>
       {this.props.handleProducts("Electronics")}
      </table>
    )
  }
}

export default ProductTable