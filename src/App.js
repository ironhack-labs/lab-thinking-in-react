import React from 'react';
import './App.css';
import data from './data.json'
import 'bulma/css/bulma.css';
import FilterableProductTable from './Components/FilterableProductTable'

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={ data } />
    </div>
  );
}

export default App;
