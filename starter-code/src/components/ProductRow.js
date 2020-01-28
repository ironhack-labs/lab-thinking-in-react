import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        return (
            
                <tr>
                    <td>{this.props.prod.name}</td>
                    <td>{this.props.prod.price}</td>
                </tr>
            
        )
    }
}
