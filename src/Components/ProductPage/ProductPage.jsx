import "./ProductPage.css"
import { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from './../SearchBar/SearchBar'
import ProductTable from "../ProdructTable/ProductTable";

const ProductPage = () => {

    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar />
            <ProductTable jsonData={jsonData} />
        </div>
    )
}

export default ProductPage