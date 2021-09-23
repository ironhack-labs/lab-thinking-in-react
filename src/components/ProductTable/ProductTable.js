import React, { Component } from 'react'
import ProductRow from './../ProductRow/ProductRow'

export default class ProductTable extends Component {

  state = {
    
  }

  displayProductsRows = () => {
    // const filteredProducts = 

    return this.props.products.map(product => {
      return(
        <ProductRow key={product.id} {...product}/>
      )
    })
  }
  
  render() {
    console.log(this.props.products)
    return (
      <div>
        {
          this.displayProductsRows()
        }
      </div>
    )
  }
}
