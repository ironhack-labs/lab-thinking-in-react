import React from 'react';
import './App.css';
import FilterableProductTable from './FilterableProductTable';
import jsondata from '../data.json'

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={ jsondata.data } />
    </div>
  );
}

export default App;
