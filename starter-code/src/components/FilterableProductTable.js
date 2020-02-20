import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = props => {
  return (
    <div>
      <SearchBar
        updateSearchText={props.updateSearchText}
        search={props.search}
        inStock={props.inStock}
        handleCheckboxChange={props.handleCheckboxChange}
      />
      <ProductTable
        products={props.products}
        searchText={props.searchText}
        inStock={props.inStock}
      />
    </div>
  );
};

export default FilterableProductTable;
