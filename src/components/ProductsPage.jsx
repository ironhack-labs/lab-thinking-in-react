import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    console.log(products)




    return (
        <div className="product-page-container">
            <h1>IronStore</h1>
            <SearchBar />

            <ProductTable products={products} />
        </div>
    );
}

export default ProductsPage;