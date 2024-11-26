// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products] = useState(jsonData);
  const [search, setSearch] = useState("");
  const [inStock, setInStock] = useState(false);

  const handleSearch = (event) => { setSearch(event.target.value); };

  const handleInStock = (event) => { setInStock(event.target.checked); };

  const SearchedProducts = (products.filter((product) => {
    return (
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (inStock ? product.inStock : true)
    );
  }));

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        search={search}
        handleSearch={handleSearch}
        inStockOnly={inStock}
        handleInStockChange={handleInStock}
      />
      <ProductTable products={SearchedProducts} />
    </div>
  );
}

export default ProductsPage;