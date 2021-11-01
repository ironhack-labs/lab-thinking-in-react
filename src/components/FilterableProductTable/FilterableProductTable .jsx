import React from 'react';
import ProductTable from '../producttable/ProductTable';
import SearchBar from '../searchbar/SearchBar';

function FilterableProductTable(props) {
  return (
    <>
      <h1>Ironstore</h1>
      <SearchBar />

      <ProductTable products={props.products} />
    </>
  );
}

export default FilterableProductTable;
