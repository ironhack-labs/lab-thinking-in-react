import "./App.css";
import { useState } from "react";
import data from "./data.json";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

function App() {
  const [products, setProducts] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckbox = (event) => {
    setInStockOnly(event.target.checked);
  };

  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (inStockOnly) {
    filteredProducts = filteredProducts.filter((product) => product.inStock);
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} handleCheckbox={handleCheckbox} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default App;
