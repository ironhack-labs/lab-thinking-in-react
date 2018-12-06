import React, { Component } from 'react'

export default class ProductCategoryRow extends Component {
  render() {
    const listProducts=[...this.props.data];
    return (

      <div>
              {/* {listProducts.map((product,index)=>{
          return(
            <div key={index}>
            
            <p>{product.category}</p>
            </div>
          )
        })} */}
      
      </div>
    )
  }
}
