import { useState } from 'react';
import ProductTable from '../ProductsTable/ProductsTable';
import jsonData from './../../data.json';

function ProductsPage() {

    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <h1>IronStore</h1>
            <ProductTable products={products} />

        </div>
    )
}

export default ProductsPage;