import React, { Component } from 'react'

export class ProductRow extends Component {
    render() {
        return (
            <tr>
                <th style={{color: !this.props.stocked && 'red'}}>{this.props.name}</th>
                <th>{this.props.price}</th>
            </tr>
        )
    }
}

export default ProductRow
