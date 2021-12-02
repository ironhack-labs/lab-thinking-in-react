import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = (props) => {
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable  products={ props.products } />
    </div>
  );
};

export default FilterableProductTable;
