import React from 'react';
import logo from './logo.svg';
import data from './data.json'
import 'bootstrap/dist/css/bootstrap.css';

import FilterableProductTable from './components/FilterableProductTable';


function App() {
  return (
    <div className="App">
       <h1>IronStore</h1>
      <FilterableProductTable products={ data } />
    </div>
  );
}

export default App;
     

