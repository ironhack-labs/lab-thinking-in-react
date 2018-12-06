import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';



class ProductCategoryRow extends Component {
  
    render () {

        return (
         <div>

         
            <h5>Sporting Goods</h5>
              <tr>
                <th>Element1 </th>
                <th>Element2 </th>
              </tr>
                <tbody></tbody>


            <h5>Electronics</h5>
              <tr>
                <th>Element1 </th>
                <th>Element2</th>
              </tr>
                <tbody></tbody>
            </div>
        )
    }
  }
  
  export default ProductCategoryRow;     

  