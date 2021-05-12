import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import jsondata from './data.json';

import FilterableProductTable from './components/FilterableProductTable';


function App() {
  return (
    <div className="App">
    <h1 style={{fontSize:'3rem'}}>IronStore</h1>
      <FilterableProductTable products={jsondata.data}/>
    </div>
  );
}

export default App;
