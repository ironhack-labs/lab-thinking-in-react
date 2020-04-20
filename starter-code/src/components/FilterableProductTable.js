import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    render() {
        return (
            <div>
                <SearchBar></SearchBar>
                <ProductTable></ProductTable>
            </div>
        );
    }
}

export default FilterableProductTable