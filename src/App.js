import React from 'react';
import jsondata from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';


function App() {
  return (
    <>
    <h1 style={{display: 'flex', justifyContent: 'center'}}>IronStore</h1>
    <div className="App">
      <FilterableProductTable
       products={ jsondata.data } 
      />
    </div>
    </>
  );
}

export default App;
