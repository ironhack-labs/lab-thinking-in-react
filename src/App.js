import React from 'react';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

function App() {
  return (
    <div className="App">
     <FilterableProductTable data={ data.data } />
    </div>
  );
}

export default App;
