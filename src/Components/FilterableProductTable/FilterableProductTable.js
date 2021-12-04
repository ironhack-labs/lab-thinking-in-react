
import { useState } from 'react';
import React from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';


const FilterableProductTable = (props) => {
  const [products, setProducts] = useState(props.products);
  const [checked, setChecked] = useState(false);


  const search = (text) => {
    const searched = props.products.filter((product) => {
      return product.name.toLowerCase().includes(text.toLowerCase());
    });
    setProducts(searched);
  };

  return (
    <div className="FilterableProductTable">
      <SearchBar search={search} checked={checked} setChecked={setChecked} />
      <ProductTable products={products} inStock={checked}/>
    </div>
  );
};

export default FilterableProductTable;