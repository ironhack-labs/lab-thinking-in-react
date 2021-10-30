import React from 'react';
import ProductTable from '../producttable/ProductTable';
import SearchBar from '../searchbar/SearchBar';

function FilterableProductTable(props) {
  return (
    <div>
      <h1>Ironstore</h1>
      <div>
        <SearchBar />
      </div>
      <div>
        <ProductTable products={props.products} />
      </div>
    </div>
  );
}

export default FilterableProductTable;
