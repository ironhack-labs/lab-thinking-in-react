import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';



class ProductTable extends Component {
  
    render () {

        return (
            <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
            </thead>
            <tbody></tbody>
        </table>
        )
    }
  }
  
  export default ProductTable;     



  