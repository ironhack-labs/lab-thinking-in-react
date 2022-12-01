import { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from '../SearchBar/SearchBar';
import ProductsTable from '../ProductTable/ProductTable';

const ProductsPage = () => {
    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar />
            <ProductsTable />
        </div>
    )
}

export default ProductsPage