import React from 'react';
import data from '../data.json'
import './App.css';
import FProductTable from './filterableProductTable/FilterableProductTable'


function App() {
  return (
    <div>
 <FProductTable  products={ data }/>

    </div>
  );
}

export default App;
