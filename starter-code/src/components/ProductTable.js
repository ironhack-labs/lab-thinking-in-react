import React, { Component } from 'react'
import ProductRow from './ProductRow'

 class ProductTable extends Component {
    constructor(props){

   
    super(props)
    this.state = {
        data: this.props.products.data
    }
}


  render() {
    //   console.log(this.state)
    return (
        <div className= "container">
            {this.props.products.data.map(oneProduct => <ProductRow key={oneProduct.name} {...oneProduct}/> )}
        </div>
    )
  }
}



export default ProductTable