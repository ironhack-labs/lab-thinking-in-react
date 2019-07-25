import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import Checkbox from './Checkbox'

const FilterableProductTable = (props) => {
  return (
    <div className="wrapper">
      <SearchBar
        state={props.state}
        search={props.search}
      />
      <Checkbox 
        state={props.state}
        checkboxHandler={props.checkboxHandler}
      />
      <ProductTable
        data={props.products}
        filtered={props.filteredArr}
        state={props.state}

      />
    </div>
  )
}

export default FilterableProductTable