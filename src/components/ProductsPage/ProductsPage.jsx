import { useState } from 'react';
import ProductsTable from '../ProductTable/ProductTable';
import jsonData from './../../data.json';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <ProductsTable products={products} />
        </div>
    )
}

export default ProductsPage