import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function FilterableProductTable(props) {

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar products={props.products }/>
            <ProductTable products={props.products }/>
        </div>
    )
}
