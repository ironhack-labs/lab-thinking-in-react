import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = (props) => {
  let [filteredProducts, setfilteredProducts] = useState([...props.products]);
  function filterBy(word){
    setfilteredProducts(props.products.filter((product)=> product.name.toLowerCase().includes(word.toLowerCase()) ));

  }
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar filterBy={filterBy}   />
      <ProductTable  products={ filteredProducts }  />
    </div>
  );
};

export default FilterableProductTable;
