import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable'
import data from './data.json'

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={data}/>
    </div>
  );
}

export default App;
