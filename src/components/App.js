import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import data from '../data.json'
import './App.css';

import FilterableProductTable from './filterableProductTable/FilterableProductTable';




function App() {
  return (
    <div className="container">
      <FilterableProductTable products={ data } />
    </div>
  );
}

export default App;
