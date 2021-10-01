import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import dataObj from '../data.json';
import SearchBar from './SearchBar';
const productData = dataObj.data;

const FilterableProductTable = () => {
  const [filteredArr, setFilteredArr] = useState(productData);
  const [searchInput, setSearchInput] = useState('');
  const [checkboxInput, setCheckboxInput] = useState(false);

  const searchInputHandler = (inputVal) => {
    setSearchInput(inputVal);
  };
  const checkboxInputHandler = (checkbox) => {
    setCheckboxInput(checkbox);
  };
  useEffect(() => {
    const productDataFiltered = productData.filter((prod) =>
      prod.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (checkboxInput === true) {
      const productDataFilteredTwice = productDataFiltered.filter(
        (elem) => elem.stocked === true
      );
      setFilteredArr(productDataFilteredTwice);
    } else {
      setFilteredArr(productDataFiltered);
    }
  }, [searchInput, checkboxInput]);
  return (
    <div>
      <SearchBar
        onSearchInput={searchInputHandler}
        onCheckboxInput={checkboxInputHandler}
      ></SearchBar>
      <ProductTable productArr={filteredArr}></ProductTable>
    </div>
  );
};
export default FilterableProductTable;
