import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

import { useState } from 'react';
import jsonData from './../data.json';



function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <h1>IronStore</h1>
            <ProductTable jsonData={jsonData} />
            <SearchBar />
        </div>
    )
}

export default ProductsPage