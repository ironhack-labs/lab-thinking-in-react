import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <FilterableProductTable products={data} />
    </div>
  );
}

export default App;
