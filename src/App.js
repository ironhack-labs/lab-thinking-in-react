import React from 'react';
import data from './data.json';
import './App.css';

import FilterableProductTable from './FilterableProductTable';

function App() {
  return (
    <div className="App">
      {/* props passing data down */}
      <FilterableProductTable products={data.data} />
    </div>
  );
}

export default App;
