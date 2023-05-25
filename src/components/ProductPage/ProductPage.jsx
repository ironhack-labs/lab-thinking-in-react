import { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from './../SearchBar/SearchBar';
import ProductTable from './../ProductTable/ProductTable';


function ProductPage() {
    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar />
            <p>-----------------------------</p>
            <ProductTable products={products} />
        </div>
    )
}

export default ProductPage;