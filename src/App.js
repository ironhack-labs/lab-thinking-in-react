import React from 'react';
import './App.css';
import {data} from './data.json'
import FilterableProductTable from './components/filterableProductTable/filterableProductTable'

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={data}/>
    </div>
  );
}

export default App;
