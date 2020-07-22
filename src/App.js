import React from 'react';
import productsList from "./data.json";
import "./Components/FilterableProductTable";
import FilterableProductTable from './Components/FilterableProductTable';
import "./App.css"

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={productsList.data}/>
    </div>
  );
}

export default App;
