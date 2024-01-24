import"./Components/Components.css"
import "./App.css";
import { useState } from 'react';
import jsonData from './data.json';
import ProductTable from "./Components/ProducTable";
import Navbar from "./Components/Navbar";

function App() {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h1 className="title">IronStore</h1>
        <div><Navbar products={products} setProducts={setProducts}></Navbar></div>
        <div><ProductTable products={products} setProducts={setProducts}></ProductTable></div>
      </div>    
  )
}
export default App; 