import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const ProductsPage = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <SearchBar />
            <ProductTable />
        </div>
    );
};

export default ProductsPage;