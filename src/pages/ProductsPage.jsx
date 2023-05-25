// src/components/ProductsPage.js

import { useState } from 'react';
import ProductTable from "../components/ProductTable/ProductTable";
import SearchBar from "../components/SearchBar/SearchBar";
import jsonData from '../data.json'

function ProductsPage({ }) {
    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar />
            <ProductTable products={products} />

        </div>
    )
}

export default ProductsPage