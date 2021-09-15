import React, { useState } from 'react';
import './FilterableProductTable.css';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

const FilterableProductTable = ({ products }) => {
  const [prodList, setProdList] = useState(products);

  const filterProds = input => {
    setProdList(
      // Don't forget to filter from ORIGINAL database, or it won't work when backspace
      [...products].filter(element => {
        return element.name.toLowerCase().includes(input.toLowerCase());
      })
    );
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar 
        filterProds={filterProds}        
      />
      <ProductTable 
        prodList={prodList}
      />
    </div>
  );
};

export default FilterableProductTable;
