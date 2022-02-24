import { useState } from 'react';
import productsFromJSON from '../../data.json';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

function ProductsPage() {
    const [products, setProducts] = useState(productsFromJSON);
    const [productsData] = useState(productsFromJSON)

    const updateProducts = (filteredProducts) => {
        setProducts(filteredProducts)
    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar products={productsData} updateProducts={updateProducts}/>
            <ProductTable products={products}/>
        </div>
    )
}

export default ProductsPage