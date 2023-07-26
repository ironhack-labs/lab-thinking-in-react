import React, { useState } from "react";
import jsonData from './../data.json';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage () {
    const [products, setProducts] = useState(jsonData);
    const [search, setSearch] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleSearchAndStock = (query, inStock) => {
        setSearch(query);
        setInStockOnly(inStock);

        const filteredProducts = jsonData.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) && 
            (inStock ? product.inStock : true)
        );
        setProducts(filteredProducts);
    };

    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar onSearch={handleSearchAndStock} onStockChange={setInStockOnly}/>
            <ProductTable products={products} />
        </div>
    )
}

export default ProductsPage;