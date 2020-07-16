import React from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {
  const filtered = props.products.filter((product) => {
    if (!props.availability) {
      return product.name.toLowerCase().includes(props.query.toLowerCase())
        ? true
        : false;
    } else {
      return product.name.toLowerCase().includes(props.query.toLowerCase()) && product.stocked // how to exclude unavailable from this?
        ? true
        : false;
    }
  });

  return (
    <div>
      <SearchBar
        query={props.query}
        setQuery={props.setQuery}
        availability={props.availability}
        setAvailability={props.setAvailability}
      />
      <ProductTable products={props.products} filtered={filtered} />
    </div>
  );
};

export default FilterableProductTable;
