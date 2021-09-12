import React, { useState } from 'react';
import './App.css';

import data from './data.json';

import SearchBar from './SearchBar/SearchBar';
import ProductTable from './ProductTable/ProductTable';

function App() {
  const [state, setState] = useState([...data.data]);
  const [search, setSearch] = useState({
    searchWord: '',
    searchOnlyStocked: false,
  });

  return (
    <div className="App">
      <h1 className="title">IronStore</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ProductTable state={state} search={search} />
    </div>
  );
}

export default App;
