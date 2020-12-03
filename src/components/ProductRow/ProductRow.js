import React, { Component, Fragment } from 'react'

export default class ProductRow extends Component {
    render() {
        //console.log(this.props)
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.inStock.toString()}</td>
            </tr>
            
        )
    }
}
