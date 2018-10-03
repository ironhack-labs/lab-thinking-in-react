import React, { Component } from 'react';
import SearchBar from './SearchBar';
import 'bulma/css/bulma.css';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    render() {
        return (
            <div className="container">
                <SearchBar></SearchBar>
                <ProductTable></ProductTable>
            </div>
        )
    };
};

export default FilterableProductTable;