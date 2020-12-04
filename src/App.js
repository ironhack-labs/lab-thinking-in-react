import React from 'react';
import data from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';


function App() {
  console.log(data, data.data)
  return (
    <div className="App">
      <FilterableProductTable products={ data.data } />
    

    </div>
  );
}

export default App;
