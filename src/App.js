import React from 'react';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';
import data from './data.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={data.data} />
    </div>
  );
}

export default App;
