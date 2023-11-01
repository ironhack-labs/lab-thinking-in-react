import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchInput, setSearchInput] = useState("");
  const [onlyStock, setOnlyStock] = useState(false);

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const handleInStock = () => {
    setOnlyStock(!onlyStock)
  }

  const handleDisplayProducts = () => {
    let filteredProducts = products;

    if(onlyStock){
      filteredProducts = products.filter(product => product.inStock)
    }

    if(searchInput !== ""){
      const searchInputLower = searchInput.toLowerCase();

      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(searchInputLower))
    }

    return filteredProducts;
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleSearch={handleSearch} handleInStock={handleInStock}/>
      <ProductTable products={handleDisplayProducts()}/>
    </div>
  );
}

export default ProductsPage