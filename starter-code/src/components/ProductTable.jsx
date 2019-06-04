import React, { Component } from 'react'
import ProductRow from './ProductRow';


class ProductTable extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return (
      <div className="box">
        <strong>Name</strong> <strong>Price</strong>
        {this.props.products.map((product, i) => 
          <ProductRow key={i} name={product.name} price={product.price} isStocked={product.stocked} />
        )}
      </div>
      
    )
  }

}
export default ProductTable