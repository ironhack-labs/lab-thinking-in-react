import React from 'react';
import './App.css';
import FilterableProductTable from "./Components/FilterableProductTable";
import dataJSON from "./data.json";

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={dataJSON.data}/>
    </div>
  );
}

export default App;
