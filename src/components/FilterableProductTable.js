import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable(props) {
  return (
    <div className="container mx-auto">
      <h1>IronStore</h1>
      <SearchBar products={props.products} />
      <ProductTable products={props.products} />
    </div>
  );
}

export default FilterableProductTable;
