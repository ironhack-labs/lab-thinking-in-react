import React from 'react';
import './FilterableProductTable.css';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

const FilterableProductTable = ({ products }) => {
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable 
        products={products}           
      />
    </div>
  );
};

export default FilterableProductTable;
