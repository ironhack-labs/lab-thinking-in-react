import React from 'react';
// import logo from './logo.svg';
import './App.css';

import FilterableProductTable from './Components/FilterableProductTable/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <FilterableProductTable title="IronStore" />
    </div>
  );
}

export default App;
