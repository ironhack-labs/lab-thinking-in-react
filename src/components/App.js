import React from 'react';
import './App.css';
import FilterTable from './FilterableProductTable/'
import Data from '../data.json'


function App() {
  return (
    <>
      <h1>IronStore</h1>
      <FilterTable products = {Data.data}/>


    </>
  );
}

export default App;
