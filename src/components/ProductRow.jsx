import React, { Component } from 'react'



export default class ProductRow extends Component {
    
    render() {
        
     return (
            
    <tr>
        {this.props.products.map((product) => {
            return (<tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                </tr>
            )
        })}
    </tr>
        )
        
    }
}