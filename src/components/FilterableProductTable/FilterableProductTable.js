
import React, { useState } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

const FilterableProductTable = (props) => {
  const {products} = props.products

  const [filteredProducts, setfilteredProducts] = useState([...products]);

  function filterBy(input){
    setfilteredProducts(products.filter((product)=> product.name.toLowerCase().includes(input.toLowerCase()) ));

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