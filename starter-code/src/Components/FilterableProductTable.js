import React from 'react';
// import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FiltrableProductTable = (props) => {

  return (
    <div>
      {/* <SearchBar /> */}
      <ProductTable data={props.data}/>
    </div>
  );
};

export default FiltrableProductTable;
