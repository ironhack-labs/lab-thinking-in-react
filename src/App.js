import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Lab thinking in react </h1>
      <FilterableProductTable products={data}/>
    </div>
  );
}

export default App;
