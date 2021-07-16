import React from 'react';
import logo from './logo.svg';
import jsondata from './data.json';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
// import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <FilterableProductTable products={ jsondata.data } />
      </div>
    </div>
  );
}

export default App;
