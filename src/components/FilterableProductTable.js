import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
};

export default FilterableProductTable;
