import React from 'react';
import logo from './logo.svg';
import './App.css';
import dataJSON from './data.json';

import FilterableProductTable from './components/FilterableProductTable';


function App() {
  return (
    <div className="App">
      <FilterableProductTable products={ dataJSON.data } />
    </div>
  );
}

export default App;
