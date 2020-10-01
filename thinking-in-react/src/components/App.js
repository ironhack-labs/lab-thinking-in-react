import React from 'react';

import data from './data.json'

import Filter from './filterproducttable/Filtertable'


import './App.css';

function App() {
  return (
    <div className="App">

      <Filter products={data} />
    </div>
  );
}

export default App;
