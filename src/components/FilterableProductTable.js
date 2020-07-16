import React from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {

  const filtered = props.products.filter((product) => {
    return product.name.toLowerCase().includes(props.query.toLowerCase())
      ? true
      : false;
  });

  return (
    <div>
      <SearchBar query={props.query} setQuery={props.setQuery} />
      <ProductTable products={props.products} filtered={filtered} />
    </div>
  );
};

export default FilterableProductTable;
