import React from 'react';
import jsondata from './data.json'
import FilterableProductTable from './Components/FilterableProductTable'
import SearchBar from './Components/SearchBar';
import 'react-bootstrap'

import './App.css';

function App() {
  return (
    <div className="App">
      <center>
        <FilterableProductTable products={jsondata.data} />
      </center>
    </div>
  );
}

export default App;
