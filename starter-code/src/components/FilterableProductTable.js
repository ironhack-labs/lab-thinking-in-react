import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = props => {
  return (
    <div>
      <SearchBar
        updateSearchText={props.updateSearchText}
        search={props.search}
      />
      <ProductTable products={props.products} searchText={props.searchText} />
    </div>
  );
};

export default FilterableProductTable;
