import React, { Component } from 'react'

export default class ProductRow extends Component {
    
    render() {
        const product = this.props.product;

        return (
            <tr style={product.stocked ? {color: 'black'} : {color: 'red'}}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}
