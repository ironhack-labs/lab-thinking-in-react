import React from 'react';
import jsondata from './data.json';
import './App.css';

import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';

function App() {
  return (
    <div className="App" style={{ margin: '1em' }}>
      <h1 className="title">IronStore</h1>
      <FilterableProductTable data={jsondata.data} />
    </div>
  );
}

export default App;
