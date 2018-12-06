import React, { Component } from 'react';



class ProductTable extends Component {
    
    render () {
        console.log(this.props)
        return (
            <table>
        <thead>
          <tr>
            <th>{this.props.name}</th>
            <th>{this.props.price}</th>
          </tr>
            </thead>
            <tbody></tbody>
        </table>
        )
    }
  }
  
  export default ProductTable;     



  