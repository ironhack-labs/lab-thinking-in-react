import React from 'react';

import SearchBar from '../Searchbar/Searchbar';
import ProductTable from '../ProductTable/ProductTable';
import CheckBox from '../CheckBox/CheckBox';

const initialSearch = {
  search: '',
};

function FilterableProductTable({ products }) {
    
  const [productsState, setProductsState] = React.useState(products);

  const [search, setSearch] = React.useState(initialSearch);

  const [show, setShow] = React.useState(false);

  const inStock = productsState.filter((product) => product.stocked);

  return (
    <div className="container">
      <h1>IronStore</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <CheckBox setShow={setShow} />
      {!show && <ProductTable search={search} products={productsState} />}
      {show && <ProductTable search={search} products={inStock} />}
    </div>
  );
}

export default FilterableProductTable;
