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

  const checkbox = (checked) => {
    setState({
      ...state,
      checkbox: checked,
    });
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        masterState={state}
        callbackFilter={filter}
        callbackCheckbox={checkbox}
      />
      <ProductTable
        masterState={state}
        filter={state.search}
        checkbox={state.checkbox}
      />
    </div>
  );
};

export default FilterableProductTable;
