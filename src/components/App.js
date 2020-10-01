import React from 'react';
import products from './data.json'
import './App.css';

import Filterable from './filterableproducttable/FilterableProductTable'


function App() {
  return (

    <Filterable data={products} />

  )
}

export default App;
