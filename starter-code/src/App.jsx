import './App.css';
import React from 'react';
import { data } from './data.json';
import { FilterableProductTable } from './components/FilterableProductTable';
import 'bulma/css/bulma.css';

const App = () => (
  <div className="container">
    <FilterableProductTable products={data} />
  </div>
);

export default App;
