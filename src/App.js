import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import FilterableProductsTable from './components/FilterableProductsTable'
import {data} from './data.json'
import './App.css';


function App() {
  
  return (
    <div> 
      <FilterableProductsTable products={data}/>
    </div>
  );
}

export default App;
