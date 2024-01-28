// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import Search from "./SearchBar";

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [search, setSearch] = useState(products)

    const filterProducts = (filter) => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(filter.toLowerCase())
        );
        setSearch(filtered);
    };

    return (
        <div>
            <Search
                onSearch={filterProducts}
           
            />
            <ProductTable products={search} />
        </div>
    );
}

export default ProductsPage;