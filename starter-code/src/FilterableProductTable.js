import React, { useEffect, useContext } from 'react';

import Context from './context';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

import data from './data.json';

import './FilterableProductTable.css';

const FilterableProductTable = () => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({
      type: 'LOAD_PRODUCTS',
      payload: data.data
    });
  }, []);

  return (
    <div className="container">
      <h1 className="title has-text-centered">Iron Store</h1>
      <SearchBar />
      <ProductTable />
    </div>
  );
};

export default FilterableProductTable;
