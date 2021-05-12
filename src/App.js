import React from 'react';
import './App.css';
import jsondata from './data.json'
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
    <h1 style={{fontSize:'3rem'}}>IronStore</h1>
    <SearchBar/>
    <ProductTable  products= {jsondata.data}/>
    </div>
  );
}

export default App;
