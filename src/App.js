import React from 'react';
import jsondata from './data.json';

import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>IronStore</h1>
      <FilterableProductTable products={jsondata.data} />
    </div>
  );
}

export default App;
