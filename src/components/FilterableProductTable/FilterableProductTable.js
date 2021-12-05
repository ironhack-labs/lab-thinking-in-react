
import React, { useState } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

const FilterableProductTable = (props) => {
  const copyOfProducts = [...props.products]
  const [filteredProducts, setfilteredProducts] = useState([copyOfProducts]);

  function filterBy(input){
    setfilteredProducts(copyOfProducts.filter((product)=> product.name.toLowerCase().includes(input.toLowerCase()) ));
  }
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar filterBy={filterBy}   />
      <ProductTable  products={filteredProducts}  />
    </div>
  );
};

export default FilterableProductTable;