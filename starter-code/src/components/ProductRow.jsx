import React, { Component } from 'react'

export default class ProductRow extends Component {

    stocked = () => {
        if (!this.props.product.stocked) {
            return {color: 'red'}
        } else {
            return {color: 'black'}
        }
    }
    

    render() {
        return (
            <tr>
                <td style={this.stocked()}>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}
