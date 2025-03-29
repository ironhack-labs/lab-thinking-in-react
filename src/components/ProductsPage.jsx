import { useState } from "react";
import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleInStockChange = (event) => {
    setInStockOnly(event.target.checked);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesStock = inStockOnly ? product.inStock : true;
    return matchesSearch && matchesStock;
  });

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchText={searchText}
        onSearchChange={handleSearchChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
