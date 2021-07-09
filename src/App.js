import React from 'react';
import jsondata from './data.json';
import './App.css';

import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <>
      <FilterableProductTable products={jsondata.data} />
    </>
  );
}

export default App;
