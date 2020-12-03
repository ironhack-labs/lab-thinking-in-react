import React from 'react';
import './App.css';
import FilterableProductTable from './filterableProductTable/FilterableProductTable'
import data from '../data.json'

function App() {
  return (
   
   <div className = 'App' >

< FilterableProductTable />

   </div>
  );
}

export default App;
