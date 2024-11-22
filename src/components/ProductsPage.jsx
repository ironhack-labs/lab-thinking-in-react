import { useState } from "react";
import jsonData from "../data.json";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState(""); // Search text
  const [stock, setStock] = useState(false); // Stock status


  // Filter products search by name, category and stock status
  const filteredProducts = products.filter(
    (p) =>
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
       p.category.toLowerCase().includes(search.toLowerCase())) &&
      (!stock || p.inStock)
  );
  

  return (
    <div className="container p-3">
      <h1 className="text-center">IronStore</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        stock={stock}
        setStock={setStock}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
