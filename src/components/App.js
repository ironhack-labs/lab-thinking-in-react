import React from 'react';
import './App.css';
import FilterableProducTable from './FilterableProductTable';
import datajson from '../data.json';

function App() {
  return (
    <>
      <FilterableProducTable products={datajson.data} />
    </>
  );
}

export default App;
