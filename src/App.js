import React from 'react';
import './App.css';
import jsondata from './data.json'
import FilterableProductTable from './Components/FilterableProductTable/FilterableProductTable';

function App() {
  return (
    <div className="App">
    <FilterableProductTable products={ jsondata.data } />
   
    </div>
  );
}

export default App;
