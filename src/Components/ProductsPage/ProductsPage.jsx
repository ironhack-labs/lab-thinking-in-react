import React, { useState, useCallback } from "react";
import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar/SearchBar";
import jsonData from "../../data.json";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState("");

  const filterProducts = useCallback(() => {
    return products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [products, search]);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar value={search} onChange={setSearch} />
      <ProductTable products={filterProducts()} />
    </div>
  );
}

export default ProductsPage;