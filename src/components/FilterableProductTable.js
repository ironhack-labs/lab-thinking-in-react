import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {
  const [searchParam, setSearchParam] = useState('');
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const handleChange = (e) => {
    setSearchParam(e.target.value);
  };
  const handleFilter = () => {
    setFilterCheckbox(!filterCheckbox);
  };
  console.log(filterCheckbox);
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        handleChange={handleChange}
        searchParam={searchParam}
        handleFilter={handleFilter}
      />
      <ProductTable
        products={props.products}
        searchParam={searchParam}
        filterCheckbox={filterCheckbox}
      />
    </div>
  );
};

export default FilterableProductTable;
