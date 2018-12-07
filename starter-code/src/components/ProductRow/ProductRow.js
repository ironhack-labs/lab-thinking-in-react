import React, { Component } from 'react'


export default class ProductRow extends Component {
  constructor(){
    super();
 
  }

  stockedChange(stocked){
      if(!stocked){
        return {color:'red'}
      }
  }
 
  render() {
    
    return (
      <div>
         {this.props.product.map((product, index) => {
            return (
              <tr>
              <td style={this.stockedChange(product.stocked)}>{product.name}</td>
              <td >{product.price}</td>
              </tr>
            ) 
          })}
       
      </div>
    )
  }
}
