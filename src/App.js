import React from 'react';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';


function App() {
  //console.log("data in App.js; ", data )
  return (
    <div className="App">
      <FilterableProductTable products={ data }/>
    </div>
  );
}

export default App;
