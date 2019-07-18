import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {
    render() {
        return (
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.price}</td>
                </tr>
        )
    }
}
