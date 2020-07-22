import React from 'react';
import logo from './logo.svg';
import './App.css';
// IMPORT DATA
import data from './data.json'
// IMPORT COMPONENTS
import FilterableProductTable from './Components/FilterableProductTable'
//



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IronStore</h1>
      </header>
      
      <FilterableProductTable products={data.data}/>

    </div>
  );
}

export default App;
