import React, { Component } from 'react'

export default class ProductRow extends Component {
    
    render() {
        // console.log(this.props.product.id)
        return (
            <tr key={this.props.product.id}>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}
