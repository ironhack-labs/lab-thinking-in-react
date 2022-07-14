// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from '../components/SearchBar'
import ProductTable from './ProductTable';



function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [query, setQuery] = useState('')
    const [checked, setCheck] = useState(false)



    return (
        <div>
            <SearchBar setQueryProp={setQuery} setCheckedProp={setCheck} />
            <div>
                <ProductTable productList={products} queryInput={query} checkedBox={checked}>

                </ProductTable></div>

        </div>

    )
}

export default ProductsPage;