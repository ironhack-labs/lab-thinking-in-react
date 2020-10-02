import React from 'react';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';



function App() {
  return (
    <div className="App">
      <FilterableProductTable products={ data } />
    </div>
  );
}

export default App;