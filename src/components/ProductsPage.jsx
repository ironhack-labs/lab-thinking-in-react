import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
    const [products] = useState(jsonData);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchTerm, setSearchTerm] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    function handleSearchChange(event) {
        const value = event.target.value;
        setSearchTerm(value);
        filterProducts(value, inStockOnly);
    }
    
    function handleStockChange(event) {
        const checked = event.target.checked;
        setInStockOnly(checked);
        filterProducts(searchTerm, checked);
    }

    function filterProducts(searchTerm, inStockOnly) {
        const filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStock = !inStockOnly || product.inStock;
            return matchesSearch && matchesStock;
        });
        setFilteredProducts(filtered);
    }

  return (
    <div>
      <h1>IronStore</h1>
        <SearchBar handleSearchChange={handleSearchChange} handleStockChange={handleStockChange} />
        <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage