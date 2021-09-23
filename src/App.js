import React from 'react';
import './App.css'
import jsondata from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable'

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={jsondata.data} />
    </div>
  );
}
export default App;
