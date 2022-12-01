// src/App.js
import "./App.css";
import ProductsPage from "./components/ProductsPage/ProductsPage"
import List from "./components/List/List"
// import SearchBar from "./components/SearchBar/SearchBar";



function App() {
  
  return <div className="App">
  <ProductsPage/>

  <List/>

  </div>;
  
}
export default App;