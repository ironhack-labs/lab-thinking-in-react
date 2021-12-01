import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = ({ productListDB }) => {
  const initialState = {
    products: productListDB,
    filteredProducts: productListDB,
    query: '',
    stock: false,
  };

  const [state, setState] = useState(initialState);

  const handleQuery = (e) => {
    const { value } = e.target;

    const filteredProducts = state.products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setState((prevState) => ({
      ...prevState,
      filteredProducts,
      query: value,
    }));
  };

  const handleStock = (e) => {
    const { checked } = e.target;

    if (checked === true) {
      const filteredProducts = state.products.filter(
        (product) => product.stocked
      );
      setState((prevState) => ({
        ...prevState,
        filteredProducts,
        stock: true,
      }));
    } else setState(initialState);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        handleQuery={handleQuery}
        query={state.query}
        handleStock={handleStock}
        showStock={state.stock}
      />
      <ProductTable products={state.filteredProducts} />
    </div>
  );
};

export default FilterableProductTable;
