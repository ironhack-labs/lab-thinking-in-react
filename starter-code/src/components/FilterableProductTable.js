import React from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {
  console.log(props.data)
  return (  
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable products={props.data}/>
    </div>
  )
}

export default FilterableProductTable