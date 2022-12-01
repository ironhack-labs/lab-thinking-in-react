import { useState } from 'react';
import jsonData from '../data.json';
import ProductsTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [filter, setFilter] = useState(jsonData);

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar products={products} setFilter={setFilter} />
            <ProductsTable products={filter} />
        </div>
    );
}

export default ProductsPage;