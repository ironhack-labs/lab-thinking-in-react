import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

export default class FilterProductTable extends Component {

    state = {
        query: '',
        inStock: false,
    }

    setQuery = query => {
        this.setState({ query: query });
    }

    render() {
        return (
            <>
                <h1>IronStore</h1>
                <SearchBar 
                    query = { this.state.query }
                    setQuery = { this.setQuery }
                    inStock = { this.state.inStock }
                />
                <ProductTable 
                    products = { this.props.products }
                    query = { this.state.query}
                />
            </>
        )
    }
}
