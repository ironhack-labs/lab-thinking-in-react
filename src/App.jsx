import "./App.css";
import jsonData from "./data.json"
import React, { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

function App() {
  const [products, setProducts] = useState(jsonData);
  const [filter, setFilter] = useState("")
  const [inStock,setInStock] = useState(false)

  const handleFiter = (event) => {
    setFilter(event.target.value);
  }
  const handleCheckBox = (event) =>{
    setInStock(event.target.checked)
  }

  const filteredProducts = products.filter((item) => {
    if(inStock){
      return item.name.toLowerCase().includes(filter) &&  item.inStock
    }else{
      return item.name.toLowerCase().includes(filter)
    }
  })
  return (
    <div className="App">
      <h1>Products Page</h1>
      <SearchBar
      products={products}
      handleFilter={handleFiter}
      filter={filter}
      inStock={inStock}
      handleCheckBox={handleCheckBox}/>
      <ProductTable products={filteredProducts}/>
    </div>
  );
}

export default App;
