import React from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data.json'
import FilterableProductTable from './components/filterableproducttable/FilterableProductTable';

function App() {
  // console.log(data.data)
  return (
    <div className="App">
      <FilterableProductTable products={ data.data} />
    </div>
  );
}

export default App;
