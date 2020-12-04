import React, { Component } from 'react';
import ProductRow from './ProductRow.js';


export default class ProductTable extends Component {
    render() {
        return (
                <table>
          <thead style={{fontWeight: "bold"}}>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Category</td>
              <td>in Stock?</td>
            </tr>
          </thead>
<tbody>

    <ProductRow products={this.props.products} query={this.props.query} />   
</tbody>
           
        
        </table>
        )
    }
}