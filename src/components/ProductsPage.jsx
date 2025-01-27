import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  // Filter products based on searchTerm and inStockOnly
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStock = inStockOnly ? product.inStock : true;
    return matchesSearch && matchesStock;
  });

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        onSearch={setSearchTerm}
        onInStockChange={setInStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
