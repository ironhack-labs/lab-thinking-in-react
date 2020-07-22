import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilterableProductTable from './componets/FilterableProductTable';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <div className="App">
        <FilterableProductTable products={data.data} />
      </div>
    </div>
  );
}

export default App;
