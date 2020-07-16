import React from 'react';
import './App.css';
import FilterProduct from './FilterableProductTable'
import data from '../data.json'

function App() {
  return (
    <div>
    
    <FilterProduct products={data.data}/>

    </div>
  )
}

export default App;
