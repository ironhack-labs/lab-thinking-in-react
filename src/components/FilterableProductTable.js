import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {
  const [searchParam, setSearchParam] = useState('');
  const handleChange = (e) => {
    setSearchParam(e.target.value);
  };
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleChange={handleChange} searchParam={searchParam} />
      <ProductTable products={props.products} searchParam={searchParam} />
    </div>
  );
};

export default FilterableProductTable;
