import React from 'react';
import logo from './logo.svg';
import jsondata from './data.json';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

const App = () => {
  return (
    <>
    <div className="App container">
        <h1 className="text-center">IronStore</h1>
        <FilterableProductTable products={jsondata.data} />
    </div>
    <footer className="App-footer text-white bg-dark mt-3 p-3">
      <p>Ironhack Lab developed by <a className="App-link" href='https://github.com/xavirepi'>Javier Repilado</a> using React <img src={logo} style={{height: '2rem'}} className="App-logo" alt="logo" /></p>
    </footer>
    </>
  );
}

export default App;
