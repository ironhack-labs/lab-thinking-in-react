import { useState } from "react";
import data from "../data.json"
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage() {

    const [products, setProducts] = useState(data);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [showStock, setShowStock] = useState(false);

    const toSearch = (search, showInStock) => {
        const filtered = products.filter((product) => 
           product.name.toLowerCase().includes(search.toLowerCase()) && 
           (showInStock ? product.inStock : true)
        );
        setFilteredProducts(filtered);
    }

    const toggleInStock = (showInStock) => {
        setShowStock(showInStock);
        toSearch('', showInStock)
    };

    return (
        <div>
            <SearchBar
               toSearch={toSearch}
               showInStock={setShowStock}
               toggleInStock={toggleInStock}
            />
            <ProductTable filteredProducts={filteredProducts} />
        </div>
    )
}

export default ProductsPage;