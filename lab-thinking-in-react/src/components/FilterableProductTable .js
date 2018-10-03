import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


export const FilterableProductTable = (props) => {
 
 let products = props.products.data
 
    return (
      <div>
        <SearchBar products={products}/>
        <ProductTable products={products} />
      </div>
    );
  }


export default FilterableProductTable;