import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        const fontColor = (this.props.product.stocked) ? "black" : "red";
        return (
            <tr key={this.props.product.id} style={{border:'solid 2px grey', color:`${fontColor}`}}>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}
