import React from 'react';
import jsondata from './data.json'
import './App.css';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';

function App() {
  let data = jsondata.data
  return (
    <div className="App mx-5 my-4">
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable products={data} />
    </div>
  );
}

export default App;
