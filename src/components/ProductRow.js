import React, { Component } from 'react'

export default class ProductRow extends Component {
  
  
  
  
  render() {
    console.log("from row", this.props.product);
      
    return (
          <>
            {this.props.products.map(product => {
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                  </tr>
                );
              })}
          </>
      )
  }
}
