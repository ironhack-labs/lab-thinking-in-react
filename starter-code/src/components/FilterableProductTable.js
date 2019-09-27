import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = props => {
  console.log(props);
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        handleQuery={props.query}
        setQuery={props.handleQuery}
        handleQueries={props.queries}
        setQueries={props.handleQueries}
      />
      <ProductTable query={props.query} queries={props.queries} products={props.products} />
    </div>
  );
};

export default FilterableProductTable;
