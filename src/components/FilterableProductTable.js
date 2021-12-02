import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = (props) => {
  return (
    <div>
      <h2>FilterableProductTable</h2>
      <SearchBar />
      <ProductTable />
    </div>
  );
};

export default FilterableProductTable;
