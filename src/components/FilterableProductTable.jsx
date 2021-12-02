import React, { useState } from 'react';
import jsondata from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function FilterableProductTable(props) {
  const [products, setProducts] = useState(jsondata);
  const [filter, setFilter] = useState('');
  const [checked, setCheck] = useState(false);

  let filtered = products.data.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const searchHandler = (e) => {
    setFilter(e.target.value);
  };

  const checkedHandler = (e) => {
    setCheck(e.target.checked);
  };

  if (checked) {
    filtered = filtered.filter((product) => {
      return product.stocked === true;
    });
  }
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        filter={filter}
        checked={checked}
        searchHandlerProp={searchHandler}
        checkedHandlerProp={checkedHandler}
      />
      <ProductTable filteredProp={filtered} products={products} />
    </div>
  );
}
