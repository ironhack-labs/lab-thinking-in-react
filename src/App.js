import React from 'react';
import jsondata from './data.json'
import './App.css';

import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';


function App() {
  const copyOfJson = {...jsondata};
  return (
    <div className="App">
      <FilterableProductTable products={copyOfJson.data} />
    </div>
  );
}

export default App;
