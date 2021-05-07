import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    render() {
        console.log(this.props.products)
        return (
            <div>
                <ProductRow 
                products={this.props.products}
                search={this.props.search}
                inStock={this.props.inStock}
                />
            </div>
        )
    }
}
