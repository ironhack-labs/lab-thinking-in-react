import React from 'react';
import data from './data.json'
//import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div className="App">
     <FilterableProductTable products={data}/>
    </div>
  );
}

export default App;
