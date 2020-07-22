import React from 'react';
import data from './data.json'
import './App.css';
import FilterableProductTable from "./Component/FilterableProductTable";

function App() {
  return (
    <div className="App">
     <FilterableProductTable products={data.data} />
    </div>
  );
}

export default App;
