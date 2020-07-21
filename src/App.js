import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json'

function App() {
  return (
    <div>
      <FilterableProductTable products={data} />
    </div>
  );
}

export default App;
