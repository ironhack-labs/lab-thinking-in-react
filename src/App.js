import { useState } from "react";
import "./App.css";
import ProductsPage from "./components/ProductsPage";
import productsData from "./data.json"

function App() {
  const [Products, setProducts] = useState(productsData)
  
  return <div className="App">
    <ProductsPage />
  </div>;
}
export default App;