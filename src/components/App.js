import React from 'react'
import jsondata from '../data.json'
import FilterableProductTable from './FilterableProductTable'




function App() {
  return (
    <div className="App">
      <h1>IronStore</h1>
      <FilterableProductTable products={jsondata.data} />
    </div>
  );
}

export default App;
