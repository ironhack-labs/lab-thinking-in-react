import { useState } from 'react';
import React from 'react';
// import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {
    console.log('props from FilterableProductTable: ', props)
    return (
        // <>
        /* <SearchBar /> */
        <ProductTable products={props.products}/>
        // </>
    )
}

export default FilterableProductTable;