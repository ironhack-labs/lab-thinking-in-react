import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable(props) {
  const [products, setProducts] = useState(props.products);

  const searchProduct = (input) => {
    let productCopy = [...products];

    if (input.search === '') {
      if (input.inStock) {
        setProducts(productCopy.filter((item) => item.stocked));
      } else {
        setProducts(props.products);
      }
    } else {
      if (input.inStock) {
        setProducts(
          productCopy.filter(
            (item) =>
              item.name.toUpperCase().includes(input.search.toUpperCase()) &&
              item.stocked
          )
        );
      } else {
        setProducts(
          productCopy.filter((item) =>
            item.name.toUpperCase().includes(input.search.toUpperCase())
          )
        );
      }
    }
  };

  return (
    <div className="filterTable">
      <h1>IronStore</h1>
      <SearchBar searchProduct={searchProduct} />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable;
