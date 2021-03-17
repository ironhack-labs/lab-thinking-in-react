import React, { Component } from 'react'
import '../styles/ProductRow.css'

export class ProductRow extends Component {

    product = this.props.product


    render() {
        return ( 
             <tr key={this.product.id}>
                 <td>{this.product.name}</td>
                 <td>{this.product.price}</td>   
             </tr>          
        )
    }
}

export default ProductRow
