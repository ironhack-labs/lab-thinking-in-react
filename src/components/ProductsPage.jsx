import { useState } from "react";
import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [searchTerm, setSearchTerm] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleInStockChange = (event) => {
        setInStockOnly(event.target.checked);
    };

    const filteredProducts = products.filter((product) => {
        return (product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!inStockOnly || product.inStock)
     );
});


  return (
    <div>
        <h1>Products</h1>
        <SearchBar serchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;