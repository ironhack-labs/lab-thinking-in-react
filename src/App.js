import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable ';
import jsondata from './data.json';

function App() {
  return (
    <div className="App">
    <header>IronStore</header>
      <FilterableProductTable products={ jsondata.data } />
    </div>
  );
}


export default App;
