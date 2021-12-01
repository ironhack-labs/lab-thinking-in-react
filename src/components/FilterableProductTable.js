import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable(props) {
  return (
    <div>
      <h1>
        <b>IronStore</b>
      </h1>
      <SearchBar />
      <ProductTable data={props.products} />
    </div>
  );
}

export default FilterableProductTable;
