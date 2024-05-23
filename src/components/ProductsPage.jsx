import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState("");

  const handleSearchBar = (event) => {
      setSearch(event.target.value)
      console.log(jsonData)

const filteredProducts = jsonData.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
setProducts(filteredProducts)
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleSearch={handleSearchBar} search={search} />
      <ProductTable allProducts={products}/>
    </div>
  );
}

export default ProductsPage;
