import React from 'react';
import './App.css';
import FilterableProducTable from './FilterableProductTable';
import SearchBar from './SearchBar';
import datajson from '../data.json';

function App() {
  return (
    <>
      <SearchBar />
      <FilterableProducTable products={datajson.data} />
    </>
  );
}

export default App;
