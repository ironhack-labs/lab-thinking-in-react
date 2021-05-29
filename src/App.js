import React from 'react';
import './App.css';
import data from './data.json'
import FilterableProduct from './components/FilterableProduct'

function App() {

  return (
    <div className="App">
      <FilterableProduct data={data.data}/>
    </div>
  );
}

export default App;
