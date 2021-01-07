import React from 'react';
import logo from './logo.svg';
import data from './data.json';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  const products = data.data.map((product) => product);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FilterableProductTable products={products} />
    </div>
  );
}

export default App;
