import React, { Component } from 'react'
import ProductRow from './ProductRow'

class ProductTable extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return ( 
          <ProductRow />
    )
  }
}
export default ProductTable;