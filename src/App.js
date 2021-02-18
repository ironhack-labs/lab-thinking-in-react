import React from 'react';
import './App.css';
import dataJson from "./data.json"
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable"

function App() {
  return (
    <div className="App">
      <h1>IronStore</h1>
      <div className="container-gen">
        <FilterableProductTable data={dataJson.data} />
      </div>
    </div>
  );
}

export default App;
