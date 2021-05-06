import React from 'react';
import './App.css';
import data from './data.json'
import FilteredTable from './components/FilteredTable';

function App() {
  return (
    <div className="App">
      <FilteredTable products={data}/>
    </div>
  );
}

export default App;
