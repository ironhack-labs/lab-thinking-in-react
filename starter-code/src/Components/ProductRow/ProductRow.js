import React, { Component } from 'react'
import './ProductRow.css'

export default class ProductRow extends Component {
  render() {
    //console.log(this.props.categoryData)
    return (
      <tr>
        
        {this.props.categoryData.map(item => {
           return (
            <tr>
              <td className={item.stocked?'verde':'rojo'}>{item.name}</td>
              <td >{item.price}</td>
            </tr>
           )
          
        })}
      </tr>


    )
  }
}
