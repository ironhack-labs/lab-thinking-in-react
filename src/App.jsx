import "./App.css";
import allProducts from "./data.json";
import ProductsTable from "./components/ProductsTable";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(allProducts);
  const [showInStock, setShowInStock] = useState(false);

  const handleSearchChange = (ev) => {
    setSearch(ev.target.value);
  };

  const handleCheckbox = () => {
    setShowInStock(!showInStock);
  };

  const filterProducts = () => {
    let filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });

    if (showInStock) {
      filteredProducts = filteredProducts.filter((product) => product.inStock);
    }
    return filteredProducts;
  };
  return (
    <div className="App">
      <h1>Iron Store</h1>
      <Search
        onChange={handleSearchChange}
        onChange1={handleCheckbox}
        checked={showInStock}
      />
      <ProductsTable products={filterProducts()} />
    </div>
  );
}

export default App;
