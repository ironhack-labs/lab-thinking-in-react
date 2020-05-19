import React from 'react';
import ProductTable from '../../molecules/ProductTable';
import SearchBar from '../../molecules/SearchBar';

const FiltereableProductTable = ({ data }) => {
  return (
    <div className="FiltereableProductTable--container">
      <SearchBar />
      <ProductTable data={data} />
    </div>
  );
};

export default FiltereableProductTable;
