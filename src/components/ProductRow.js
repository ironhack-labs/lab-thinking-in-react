import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {

        const products = this.props.products;

        return (
            <>
                {products}
            </>
        )
    }
}
