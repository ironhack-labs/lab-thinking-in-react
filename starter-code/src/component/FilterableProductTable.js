import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = ({ products, onSearch }) => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">IronStore</h1>
      </div>
    </div>
    <SearchBar onSearch={onSearch}/>
    <ProductTable products={products}/>
  </div>
);

export default FilterableProductTable