import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

{
  /* <FilterableProductTable
search={this.state.searchText}
updateSearchText={this.updateSearchText}
products={this.state.data}
/> */
}

const FilterableProductTable = props => {
  return (
    <div className="filterable-product-table">
      <h1>IronStore</h1>
      <SearchBar
        inStock={props.inStock}
        search={props.search}
        handleCheck={props.handleCheck}
        updateSearchText={props.updateSearchText}
      />
      <ProductTable
        inStock={props.inStock}
        search={props.search}
        products={props.products}
      />
    </div>
  );
};

export default FilterableProductTable;
