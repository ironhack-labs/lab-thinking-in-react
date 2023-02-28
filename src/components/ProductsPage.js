import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import jsonData from "../data.json";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleInStockInputChange = (e) => {
    setInStockOnly(e.target.checked);
  };

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (!inStockOnly || product.inStock)
    );
  });

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchText={searchText}
        inStockOnly={inStockOnly}
        onSearchInputChange={handleSearchInputChange}
        onInStockInputChange={handleInStockInputChange}
        onUpdateProducts={updateProducts}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
