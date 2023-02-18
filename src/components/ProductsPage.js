import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import products from "../data.json";

function ProductsPage() {
const [filterText, setFilterText] = useState("");
const [inStockOnly, setInStockOnly] = useState(false);

const handleFilterTextChange = (filterText) => {
    setFilterText(filterText);
};

const handleInStockChange = (inStockOnly) => {
    setInStockOnly(inStockOnly);
};

return (
    <div>
    <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
    />
    <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
    />
    </div>
);
}

export default ProductsPage;
