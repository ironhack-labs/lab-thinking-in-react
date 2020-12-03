import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        const skus = this.props.sku
        return (
            <tr>
            <td>
                {skus.name}
            </td>
            <td>
             {skus.price}
            </td>
            <td>{skus.stocked.toString()}</td>
            </tr>
        )
    }
}
