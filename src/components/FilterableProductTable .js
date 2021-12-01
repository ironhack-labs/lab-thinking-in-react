import { useState } from 'react';
import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

// import './FilterableProductTable.css'

const FilterableProductTable = (props) => {
  const [products, setProducts] = useState(props.products);

  const search = (text) => {
    const searched = props.products.filter((product) => {
      return product.name.toLowerCase().includes(text.toLowerCase());
    });
    setProducts(searched);
  };

  return (
    <div className="FilterableProductTable">
      <SearchBar search={search} />
      <ProductTable products={products} />
    </div>
  );
};

export default FilterableProductTable;
