import React, { Component } from 'react'

export class ProductRow extends Component {
    render() {
        const {name, price} = this.props.item
        return (
            <tr>
                <td>{name}</td><td>{price}</td>
            </tr>
        )
    }
}

export default ProductRow
