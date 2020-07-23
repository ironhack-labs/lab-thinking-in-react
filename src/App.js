import React from 'react';
import data from './data.json';
import FilterableProductTable from './Components/FilterableProductTable';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>IronStore</h1>
      <FilterableProductTable products={data.data} />
    </div>
  );
}

export default App;
