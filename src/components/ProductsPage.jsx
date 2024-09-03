import { useState } from "react";
import jsonData from "/src/data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

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

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchText={searchText}
        onSearchChange={handleSearchChange}
        inStockOnly={inStockOnly}
        onInStockChange={handleInStockChange}
      />
      <ProductTable products={products} searchText={searchText} inStockOnly={inStockOnly} />
    </div>
  );
}

export default ProductsPage;

