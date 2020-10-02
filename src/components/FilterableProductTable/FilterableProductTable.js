import React, { Component } from 'react'
import ProductTable from '../ProductTable/ProductTable'
import SearchBar from '../SearchBar/SearchBar'

export default class FilterableProductTable extends Component {
    state = {
        products: this.props.products,
    }

    render() {
        return (
            <div>
                <h1 className="title is-1">IronStore</h1>
                <SearchBar />
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}
