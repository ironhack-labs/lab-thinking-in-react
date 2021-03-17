import React from 'react';
import jsondata from './data.json'
import FilterableProductTable from './Components/FilterableProductTable'
import './App.css';

function App() {


  return (
    <div className="App">
      <FilterableProductTable products={ jsondata.data } />
    </div>
  );
}

export default App;
