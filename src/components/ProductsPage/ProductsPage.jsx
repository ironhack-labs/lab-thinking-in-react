import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import dataJson from '../../data.json'
import ProductTable from '../ProductTable/ProductTable';




function ProductsPage() {
    const [products, setProducts] = useState(dataJson);
    console.log(products)

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar products={products} />
            <ProductTable products={products} />

        </div>
    )
}

export default ProductsPage