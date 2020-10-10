import React from 'react';
import dataJSON from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';


function App(props) {

  return (
    <div className="App">
     <FilterableProductTable products={ dataJSON.data } />
     
    </div>
  );
}

export default App;
