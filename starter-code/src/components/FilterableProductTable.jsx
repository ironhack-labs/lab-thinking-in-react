import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = ({products, setFilter, filter, setJustOnStock}) => {
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar filter={filter} setFilter={setFilter} setJustOnStock={setJustOnStock} />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable;