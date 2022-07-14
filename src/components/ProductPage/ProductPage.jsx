import { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

function ProductsPage() {

    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <h1>Iron Store</h1>
            <SearchBar products={products} />
            <ProductTable products={products} />
        </div>
    )
}

export default ProductsPage