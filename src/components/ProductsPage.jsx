// ProductsPage.jsx
import React, { useState } from "react";
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

function ProductsPage({ productsData }) {
    const [search, setSearch] = useState("");
    const [inStock, setInStock] = useState(false);

    const filterProducts = () => {
        const filteredProducts = productsData.filter((product) => {
            const matchName = product.name.toLowerCase().includes(search.toLowerCase());
            const matchStock = inStock ? product.inStock : true;
            return matchName && matchStock;
        });
        return filteredProducts;
    };

    return (
        <div className="App">
            <h1>IronStore</h1>
            <SearchBar
                search={search}
                setSearch={setSearch}
                inStock={inStock}
                setInStock={setInStock}
            />
            <ProductsTable products={filterProducts()} />
        </div>
    );
}

export default ProductsPage;

