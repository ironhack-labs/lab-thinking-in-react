import React from "react";
import ProductsPage from "./components/ProductsPage";
import productsData from "./data.json";

function App() {
  return (
    <div className="App">
      <ProductsPage productsData={productsData} />
    </div>
  );
}

export default App;