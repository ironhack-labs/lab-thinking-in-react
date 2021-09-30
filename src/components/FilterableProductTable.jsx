import React, { useState } from 'react';
import ProductTable from './ProductTable';
import dataObj from '../data.json';
import SearchBar from './SearchBar';
const productData = dataObj.data;

const FilterableProductTable = () => {
  const [filteredArr, setFilteredArr] = useState(productData);

  const inputHandler = (inputVal) => {
    const productDataFiltered = productData.filter((prod) =>
      prod.name.toLowerCase().includes(inputVal.toLowerCase())
    );
    setFilteredArr(productDataFiltered);
  };

  return (
    <div>
      <SearchBar onSearchInput={inputHandler}></SearchBar>
      <ProductTable productArr={filteredArr}></ProductTable>
    </div>
  );
};
export default FilterableProductTable;
