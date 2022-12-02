import { useEffect, useState } from 'react';
import jsonData from './../../data.json';

import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';


function ProductsPage() {
    const [products, setProducts] = useState(undefined);
    const [productName, findProductName] = useState(jsonData);

    useEffect(() => {
        setProducts(jsonData)
    }, [])

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar products={products} findProductByName={findProductName} />
            <ProductTable products={productName} />
        </div>
    )
}

export default ProductsPage