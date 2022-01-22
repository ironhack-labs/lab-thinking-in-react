import "./App.css";
import React from "react";
import productsJson from "./data.json";
import ProductsPage from "./component/productsPage/ProductsPage";


function App() {
  return (
    <div className="App">
      <ProductsPage products={productsJson} />
    </div>
  );
}

export default App;
// {
//   "category": "Sporting Goods",
//   "price": "$49.99",
//   "inStock": true,
//   "name": "Football"
// }
