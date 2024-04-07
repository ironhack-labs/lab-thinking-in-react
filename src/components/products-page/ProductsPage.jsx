import ProductsTable from "../products-table/ProductsTable"
import SearchBar from "../search-bar/SearchBar"
import { useState } from "react";
import jsonData from "./../../data.json";

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (searchTerm) => {
        const filtered = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredProducts(filtered);
    }

    return (
        <div className="container">
            <SearchBar onSearch={handleSearch} />
            <ProductsTable filteredProducts={ filteredProducts }/>
        </div>
    )
}

export default ProductsPage