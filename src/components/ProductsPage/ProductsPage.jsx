import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import jsonData from './../../data.json';
import ProductTable from "./../ProductTable/ProductTable"

const ProductsPage = () => {
    const [products, setProducts] = useState(jsonData);



    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar jsonData={jsonData} />
            <ProductTable jsonData={jsonData} />
        </div>
    )
}

export default ProductsPage