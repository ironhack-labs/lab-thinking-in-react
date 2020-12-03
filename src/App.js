import React from 'react';
import './App.css';
import { data } from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div className="App-header">
      <FilterableProductTable products={data} />
    </div>
  );
}

export default App;
