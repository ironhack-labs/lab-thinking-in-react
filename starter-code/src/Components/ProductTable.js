import React, { Component } from 'react'
import ProductRow from "./ProductRow.js";


class ProductTable extends Component {
   


  render() {
    return (
      <div>
          <div className="row">
              <p className="left">Name</p>
              <p className="right">Price</p>
          </div>
          {this.props.products.map((product, index) => {
           return (<ProductRow key={index} name={product.name} price={product.price}/>)
          })
        }
        
      </div>
    )
  }
}

export default ProductTable