import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products
        }
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar />
                <ProductTable products={this.props.products.data} />
            </div>
        )
    }
}
