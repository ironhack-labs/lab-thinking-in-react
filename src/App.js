import React from 'react';
import FilterableProductTable from './Components/FilterableProductTable/FilterableProductTable';
import data from './data.json'
import './App.css';

function App() {
  return (
    <div>
          <FilterableProductTable products={data["data"]} />
    </div>
  );
}

export default App;
