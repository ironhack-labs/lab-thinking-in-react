import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        console.log("props in Row", this.props.product)
        

        return (
            <tr>
                <td className={!this.props.product.stocked ? "notStocked" : null}>{this.props.product.name}</td>
                <td >{this.props.product.price}</td>
            </tr>
        )
    }
}
