import React from "react";
import SearchBoxComponent from "./SearchBoxComponent";
import DataTable from './DataTable';

const FilterableProductTable = () => {
  return (
    <div>
      <h3>Ironstore</h3>
      <div>
        <SearchBoxComponent />
        <DataTable />
      </div>
    </div>
  );
};

export default FilterableProductTable;
