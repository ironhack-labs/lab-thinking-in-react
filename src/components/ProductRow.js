import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        return (
            <tbody>
            <td class="table is-fullwidth"  style={{ color: this.props.product.stocked ? 'default':'red' }}>{this.props.product.name}</td>
            <td style={{ color: this.props.product.stocked ? 'default':'red' }}>{this.props.product.price}</td>
            </tbody>
                
        )
    }
}
