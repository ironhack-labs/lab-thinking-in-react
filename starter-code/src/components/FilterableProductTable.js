import React from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function FilterableProductTable(props) {
  return (
    <div>
        <SearchBar handleChange={props.handleChange}/>
        <ProductTable {...props}/>
    </div>
  )
}
