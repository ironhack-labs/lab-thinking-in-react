import { useState } from 'react';
import jsonData from '../../data.json';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar items={products} setProducts={setProducts} />
            <ProductTable items={products} />
        </div>
    )
}
export default ProductsPage;