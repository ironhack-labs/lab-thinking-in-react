import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

const FilterableProductTable = ({ data }) => {
  const [products, setProducts] = useState([...data]);
  const [query, setQuery] = useState('');

  const handleFilter = (query) => {
    setQuery(query);
  };

  return (
    <main>
      <SearchBar filter={handleFilter} />
      <ProductTable data={products} query={query} />
    </main>
  );
};

export default FilterableProductTable;
