import React from 'react';

import SearchBar from '../Searchbar/Searchbar';
import ProductTable from '../ProductTable/ProductTable';

const initialSearch = {
  search: '',
};

function FilterableProductTable({ products }) {
  const [productsState, setProductsState] = React.useState(products);

  const [search, setSearch] = React.useState(initialSearch);

  return (
    <div className="container">
      <h1>IronStore</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ProductTable search={search} products={productsState} />
    </div>
  );
}

export default FilterableProductTable;
