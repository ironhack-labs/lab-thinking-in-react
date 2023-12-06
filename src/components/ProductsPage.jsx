// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);


    const handleSearch = (input) => {
        if (!input) {
            setProducts([...jsonData])
        } else {
            const filtered = jsonData.filter(product => {
                return product.name.toLocaleLowerCase().indexOf(input.toLocaleLowerCase()) !== -1;
            })
            setProducts(filtered)
        }
    }

    return (
        <div>
            <SearchBar search={handleSearch} />
            <ProductTable products={products} />
        </div>
    );
}

export default ProductsPage;