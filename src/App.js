import React from 'react';
import data from './data.json';
import FilterableProductTable from './Components/FilterableProductTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={data.data} />
    </div>
  );
}

export default App;
