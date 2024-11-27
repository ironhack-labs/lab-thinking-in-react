import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(jsonData);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const handleSearch = (searchTerm, inStockOnly) => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (inStockOnly) {
      filtered = filtered.filter((product) => product.inStock);
    }
    setFilteredProducts(filtered);
  };

  const handleFilterInStock = (inStockOnly) => {
    setShowInStockOnly(inStockOnly);
    handleSearch(searchTerm, inStockOnly);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        onSearch={handleSearch}
        onFilterInStock={handleFilterInStock}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
