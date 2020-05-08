import React, { Component } from 'react'

export default class ProductRow extends Component{
    render(){
        const {product} = this.props
        let stock = {
            color: product.stocked ? '' : 'red'
        }

        return (
            <tr style={stock}>
                <td>
                    {product.name}
                </td>
                <td>
                    {product.price}
                </td>
            </tr>
        )

    }
}