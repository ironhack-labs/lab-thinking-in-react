import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { Container } from 'react-bootstrap';

const FilterableProductTable = (props) => {
  //PROPS => props.products
  const initialState = {
    search: '',
    products: props.products,
    showStocked: false,
  };

  const [state, setState] = useState(initialState);

  const handleSearch = (event) => {
    setState({
      ...state,
      search: event.target.value,
    });
  };

  const handleStock = (event) => {
    setState({
      ...state,
      showStocked: event.target.checked,
    });
  };

  return (
    <div>
      <Container>
        <h1 className="text-center">IronStore</h1>
        <SearchBar
          products={state.products}
          handleSearch={handleSearch}
          searchValue={state.search}
          handleStock={handleStock}
        />
        <ProductTable products={state.products} searchValue={state.search} showStocked={state.showStocked}/>
      </Container>
    </div>
  );
};

export default FilterableProductTable;
