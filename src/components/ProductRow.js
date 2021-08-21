import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        return (
            <div className="product-row">
                <div className="column-name">{this.props.name}</div>
                <div className="column-price">{this.props.price}</div>
            </div>
        )
    }
}
