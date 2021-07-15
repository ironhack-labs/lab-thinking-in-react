import React, { Component } from 'react'

export default class ProductRow extends Component {

    render() {
        return (
            <tr key={this.props.id}>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
            
        )
    }
}
