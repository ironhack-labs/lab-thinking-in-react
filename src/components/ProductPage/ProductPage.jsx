import { useState } from 'react';
import jsonData from './../../data.json';

import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';


function ProductsPage() {
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