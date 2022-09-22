// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <div>
                <h1 className='pt-5'>IronStore</h1>
            </div>
            <SearchBar products={jsonData} setProducts={setProducts} />
            <ProductTable products={products} />
        </div>


    )

}

export default ProductsPage