import React from 'react';
import './App.css';
import FilterProductTable from './components/FilterProductTable';
import data from './data.json';


function App() {
  return (
    <div className="App">
      <FilterProductTable 
        products={ data }
      />
    </div>
  );
}

export default App;
