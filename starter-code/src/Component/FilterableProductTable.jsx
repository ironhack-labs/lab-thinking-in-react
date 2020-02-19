import React from 'react'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default function FilterableProductTable({products, inputHandler, searchInput, inStock}) {
    return (
        <div>
            <SearchBar inputHandler={inputHandler}/>
            <ProductTable products={products} searchInput={searchInput} inStock={inStock}/>
        </div>
    )
}