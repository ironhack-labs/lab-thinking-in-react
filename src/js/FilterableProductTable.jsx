import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = props => {
    return (
        <div>
            <SearchBar handleSearch={props.handleSearch} handleStocked = {props.handleStocked}/>
            <ProductTable products={props.products} categories={props.categories} />
        </div>

    );
}

export default FilterableProductTable