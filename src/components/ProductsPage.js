import React from 'react'
import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductsPage() {

    const [products, setProducts] = useState(jsonData);
    const [searchQuery, setsearchQuery] = useState('');
    const [instock, setInstock] = useState(false);

    return (
        <>
            <div><h1>IronStore</h1></div>
            <SearchBar setsearchQuery={setsearchQuery} setInstock={setInstock}/>
            <ProductTable products={products} searchQuery={searchQuery} instock={instock}/>
        </>
    )
}
