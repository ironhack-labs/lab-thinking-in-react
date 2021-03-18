import React from 'react';
import jsondata from './data.json'
import './App.css';

import FilterableProductTable from './Components/FilterableProductTable';


function App() {
  return (
    <div className="App">
      <h1>Table</h1>
      <FilterableProductTable products={ jsondata.data } />
    </div>
  );
}

export default App;