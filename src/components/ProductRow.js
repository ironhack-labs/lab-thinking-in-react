import React, { Component } from 'react'

export class ProductRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.product.stocked ? <span>{this.props.product.name}</span> : <span className="red">{this.props.product.name}</span>} </td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}

export default ProductRow
