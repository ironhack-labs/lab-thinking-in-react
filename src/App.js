import React from 'react';
import './App.css';
import data from './data.json'
import FilterableTable from './FilterableTable';


function App() {
  return (
    <div className="App">
      <FilterableTable products={data.data} />
    </div>
  );
}

export default App;
