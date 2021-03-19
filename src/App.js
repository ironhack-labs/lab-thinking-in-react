import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProdTable from './Components/FilterableProdTable'
import dataJSON from './data.json'


function App() {
  return (
    <div className="App">
      <FilterableProdTable products={dataJSON.data}/>
    </div>
  );
}

export default App;
