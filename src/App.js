import React from 'react';
import 'bulma/css/bulma.css';
import data from './data.json';
import FilterableProductTable from './components/filterableproducttable/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={data.data} />
    </div>
  );
}

export default App;
