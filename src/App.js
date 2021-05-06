import React from 'react';
import jsonData from './data.json'
import './App.css';

import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={jsonData.data}/>
    </div>
  );
}

export default App;
