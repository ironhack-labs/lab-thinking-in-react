import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';
import data from './data.json'

function App() {
  return (
    <div className="App container">
      <h1 className="my-5">IronStore</h1>
      <FilterableProductTable products={ data.data }/>
    </div>
  );
}

export default App;
