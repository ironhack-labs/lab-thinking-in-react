import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import jsonData from "../data.json";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (text) => {
    setFilterText(text);
  };

  const handleInStockChange = (checked) => {
    setInStockOnly(checked);
  };

  const filteredProducts = products.filter((product) => {
    if (inStockOnly && !product.inStock) {
      return false;
    }
    return product.name.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <div>
        <h1>React | Thinking in React</h1>

      <h1>IronStore</h1>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <br />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
