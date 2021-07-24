import React from 'react';
import './App.css';
import ProductTable from './components/ProductTable';

function App() {
  return (
    <div className="App">
      <h1>IronStore</h1>
      {/* <SearchBar/> */}
      <ProductTable/>
    </div>
  );
}

export default App;
