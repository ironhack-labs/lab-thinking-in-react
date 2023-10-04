/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./searchBar";
import ProductTable from "./productTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const handleSearch = (searchTerm) => {
    const filteredProducts = jsonData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;