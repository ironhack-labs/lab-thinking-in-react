import React, { useState } from 'react';
import data from '../../data.json'
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

function FilterableProductTable(props) {

    const [products, setProducts] = useState({ data })
    //console.log (products)
    
    return (
        <div className="FilterableProductTable">
            <h1>IronStore</h1>
            <SearchBar />
            <ProductTable {...products}/>
        </div>
    );
}

export default FilterableProductTable;