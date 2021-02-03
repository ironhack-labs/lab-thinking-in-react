import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable() {
    return (
        <div>
            <p>FilterableProductTable</p>
            <SearchBar />
            <ProductTable />
        </div>
    )
}

export default FilterableProductTable
