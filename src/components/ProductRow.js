import React, { Component } from 'react'
import '../App.css'

export default class ProductRow extends Component {
    render() {
        return (
            <div>
                <tr key={this.props.id} style={{ display: 'flex', justifyContent: 'center' }}>
                    <td>{this.props.name}</td>
                    <td>{this.props.price}</td>
                </tr>
            </div>
        )
    }
}
