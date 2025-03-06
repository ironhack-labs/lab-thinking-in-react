// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "./../../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [allProducts] = useState(jsonData);

  const handleSearch = (userInput) => {
    setProducts(
      allProducts
        .filter((product) => product.name.toLowerCase().includes(userInput.keyWord.toLowerCase()))
        .filter((product) => (userInput.inStock ? product.inStock === userInput.inStock : true))
    );
  };

  return (
    <div className="mx-5">
      <h1>IronStore</h1>
      <SearchBar handleSearch={handleSearch} />
      <ProductTable data={products} />
    </div>
  );
}

export default ProductsPage;
