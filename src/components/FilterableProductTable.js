import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {
  const initialState = {
    products: props.products.data,
    search: '',
  };

  const [state, setState] = useState(initialState);

  const filter = (filter) => {
    setState({
      ...state,
      search: filter,
    });
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar masterState={state} callbackFilter={filter} />
      <ProductTable masterState={state} filter={state.search} />
    </div>
  );
};

export default FilterableProductTable;
