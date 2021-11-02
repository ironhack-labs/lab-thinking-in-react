import React, { useState } from 'react';
import SearchBar from '../searchbar/SearchBar';
import ProductTable from '../producttable/ProductTable';

function FilterableProductTable(props) {
  const [filterInput, setFilterInput] = useState('');
  return (
    <>
      <h1>Ironstore</h1>
      <SearchBar
        filterInput={filterInput}
        updatedInput={(input) => setFilterInput(input)}
      />
      <ProductTable products={props.products} filterInput={filterInput} />
    </>
  );
}

export default FilterableProductTable;
