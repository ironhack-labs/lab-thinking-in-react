import React from 'react';
import { useState } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleIsChecked = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <main>
      <h1>IronStore</h1>

      <SearchBar
        handleSearch={handleSearch}
        isChecked={isChecked}
        handleIsChecked={handleIsChecked}
      />

      <ProductTable
        items={products}
        searchTerm={searchTerm}
        isChecked={isChecked}
      />
    </main>
  );
};

export default FilterableProductTable;
