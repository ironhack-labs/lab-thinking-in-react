import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    return (
      <div className="table-products">
         <tr  >
            <td >Name</td>
            <td>{this.props.filteredProducts.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{this.props.filteredProducts.price}
              
            </td>
          </tr>
      </div>
    )
  }
}
