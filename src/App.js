import React from 'react';
import jsondata from './data.json';
import './App.css';

import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <h1>IronStore</h1>
      <FilterableProductTable data={jsondata.data} />
    </div>
  );
}

export default App;
