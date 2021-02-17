import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';
import CheckBox from '../CheckBox/CheckBox';

const FilterableProductTable = ({ data }) => {
  const [query, setQuery] = useState('');
  const [check, setCheck] = useState(false);

  const handleCheck = (event) => setCheck(!check);

  const setStock = () => {
    if (check) return data.filter((product) => product.stocked);
    return data;
  };

  const handleFilter = ({ target }) => setQuery(target.value);

  return (
    <main>
      <SearchBar filter={handleFilter} query={query} />
      <CheckBox handler={handleCheck} />
      {query ? (
        <ProductTable
          data={setStock().filter(({ name }) =>
            name.toLowerCase().includes(query.toLowerCase())
          )}
        />
      ) : (
        <ProductTable data={setStock()} />
      )}
    </main>
  );
};

export default FilterableProductTable;
