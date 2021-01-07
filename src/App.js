import React from 'react';
import data from './data.json';
import logo from './logo.svg';
import FilterableProductTable from './components/FilterableProductTable';
// import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={data.data} />
    </div>
  );
}

export default App;
