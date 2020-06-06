import React from 'react';

// importing data
import productDataObject from './data.json'

// importing styles
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// importing components
import FilterableProductTable from './components/organisms/FilterableProductTable';

function App() {

  return (
    <div className="App container">
      <h1 className="h1">IronStore</h1>
      <FilterableProductTable products={productDataObject.data}></FilterableProductTable>

    </div>
  );
}


export default App;
