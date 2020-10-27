import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
 

      const productsArr = this.props.products
   
        return (
            productsArr.map(product => 
                <tr key={product.id} style={{ color: !product.stocked && 'red' }}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
           )
        )
    }
}
