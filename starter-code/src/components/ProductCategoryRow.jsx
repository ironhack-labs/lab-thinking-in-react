import React, { Component } from 'react';
import '../App.css';

 class ProductCategoryRow extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }
   render() {
    return(
      <tr>
       <th>{this.props.prodCategory}</th>
      </tr>
     )
  }
}
export default ProductCategoryRow 