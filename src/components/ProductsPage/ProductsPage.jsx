import { useState } from 'react';
import ProductsTable from '../ProductTable/ProductTable';
import Searchbar from '../SearchBar/SearchBar';
import jsonData from './../../data.json';


function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <h1>IronStore</h1>
            <Searchbar />
            <ProductsTable  products={products}/>
        </div>
    )
}

export default ProductsPage