import React from 'react';
import './App.css';
import jsondata from './data.json'
import ProductTable from './components/FilterableProductTable/ProductTable'


function App() {
  return (
      <div>
        <ProductTable products= {jsondata.data}/>
      </div>
  );
}




export default App
