import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {data} from './data.json' 
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable/FilterableProductTable'

function App() {
  
  return (
    <div className="App">
      <FilterableProductTable products={ data } />
    </div>
  );
}

export default App;
