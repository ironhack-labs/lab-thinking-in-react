import React from 'react';
import './App.css';
import dataJson from "./data.json"
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable"

function App() {
  return (
    <div className="App">
      <h1>IronStore</h1>
      <FilterableProductTable data={dataJson.data} />
    </div>
  );
}

export default App;
