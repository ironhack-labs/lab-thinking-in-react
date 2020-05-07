import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {
  //console.log(props);
  return (
    <div>
      <h1>Iron Shop</h1>
      <SearchBar
        products={props.products}
        query={props.query}
        triggerSetQuery={props.triggerSetQuery}
        click={props.click}
      ></SearchBar>
      <ProductTable
        products={props.products}
        query={props.query}
        triggerSetQuery={props.triggerSetQuery}
        clicked={props.clicked}
      ></ProductTable>
    </div>
  );
};

export default FilterableProductTable;
