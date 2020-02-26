import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends React.Component{
    render() {
        return (
            <div>
                <SearchBar></SearchBar>
                <ProductTable></ProductTable>
            </div>
        );
    }
}