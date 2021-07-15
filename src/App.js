import React from 'react';
import jsondata from '../src/data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';



function App() {
  return (
    <div className="App">
      <h1>IronStore</h1>
      <FilterableProductTable products={ jsondata.data } />
      
    </div>
  );
}

export default App;
