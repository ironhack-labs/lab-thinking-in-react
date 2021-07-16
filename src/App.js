import React from 'react';
import './App.css';
import jsondata from './data.json';
import FilterableProductTable from './components/FilterableProductTable'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <FilterableProductTable 
        products={ jsondata.data } 
      />
      </header>
    </div>
  );
}

export default App;
