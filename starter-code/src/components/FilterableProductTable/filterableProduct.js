import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

export default class FilterableProduct extends Component {
    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar></SearchBar>
                <ProductTable></ProductTable>
            </div>
        )
    }
}
