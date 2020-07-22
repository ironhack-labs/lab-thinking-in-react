import React from 'react';
import data from './data.json'
import FilterableProductsTable from './components/FilterableProductsTable';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <FilterableProductsTable products={data} />
    </div>
  );
}

export default App;
