import React from 'react';
import './App.css';
import jsondata from './data.json';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={jsondata.data} />
    </div>
  );
}

export default App;
