// ProductsPage.js

import { useState } from "react";
import jsonData from "./../../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [showInStock, setShowInStock] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInStockChange = (event) => {
    setShowInStock(event.target.checked);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!showInStock || (showInStock && product.inStock))
  );

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showInStock={showInStock}
        handleInStockChange={handleInStockChange}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
