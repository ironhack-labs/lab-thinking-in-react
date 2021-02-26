import React from 'react';
import logo from './logo.svg';
import './App.css';
import initialData from './data.json'
import FilterableProductTable from './Components/FilterableProductTable'

function App() {
  return (
    <div className="App">
      <FilterableProductTable product={ initialData.data } />
    </div>
  );
}

export default App;
