import React from 'react';
import jsondata from './data.json'
import './App.css';

import FilterableProductTable from './components/filterableProductTable/FilterableProductTable';


function App() {
  return (
    <div className="app">
      <h1>IronStore</h1>
      <FilterableProductTable products={ jsondata.data } />
    </div>
  );
}

export default App;