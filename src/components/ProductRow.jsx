import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        return (
                <tr style={{ color: this.props.productRow.stocked ? "black" : "red" }}>
                    <td>{this.props.productRow.name}</td>
                    <td>{this.props.productRow.price}</td>
                </tr>
        )
    }
}
