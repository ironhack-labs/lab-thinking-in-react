import React from 'react';
import './App.css';
import FilterableProductTable from './components/filterableProductTable/filterableProductTable'
import data from './data.json'

function App() {

   

  return (
    <div className="App">
    <FilterableProductTable products={data.data}  />
    </div>
  )
}

export default App;
