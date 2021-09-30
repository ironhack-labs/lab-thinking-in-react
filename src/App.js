import React, { useState } from 'react';
import data from './data.json';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function App() {
  const goods = data.data;
  console.log(goods);
  const [searchTerm, setSearchTerm] = useState('');
  const [checked, setChecked] = useState(false);

  const searchChangeHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const checkBoxCahngeHandler = (checkCheck) => {
    setChecked(checkCheck);
  };

  return (
    <div>
      <SearchBar
        onSearchChange={searchChangeHandler}
        searchTermValue={searchTerm}
        onCheckBoxChange={checkBoxCahngeHandler}
      />
      <ProductTable
        isStockFilterChecked={checked}
        searchTermToFilter={searchTerm}
        goods={goods}
      />
    </div>
  );
}

export default App;
