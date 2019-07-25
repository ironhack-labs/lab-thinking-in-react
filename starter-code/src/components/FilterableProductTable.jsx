import React, {Fragment} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {
  return (
    <Fragment>
      <SearchBar filterData={props.filterData}/>
      <ProductTable data={props.data} />
    </Fragment>
  )
}

export default FilterableProductTable;
