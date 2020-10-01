import React from 'react';
import './App.css';

import data from './data.json'
import FilterableTable from './filterableTable/FilterableTable'

function App() {
  return (
   <>
    <FilterableTable {...data} />
   </>
  );
}

export default App;
