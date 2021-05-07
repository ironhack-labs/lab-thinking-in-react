import React, { Component } from 'react'

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {

    state = {
        query: '',
        inStock: false
    };

    setQuery = queryParam => {
        this.setState({
            query: queryParam
        })
    }

    setInStock = queryParam => {
        this.setState({
            inStock: queryParam
        })
    }

    render() {
        let filteredProducts = this.props.products.filter(product => product.name.toLowerCase().includes(this.state.query.toLocaleLowerCase()));
        filteredProducts = this.state.inStock ? filteredProducts.filter(product => product.stocked) : filteredProducts;
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar
                    query={this.state.query}
                    inStock={this.state.inStock}
                    setQuery={this.setQuery}
                    setInStock={this.setInStock}
                />
                <ProductTable
                    products={filteredProducts}
                />
            </div>
        )
    }
}