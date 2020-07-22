import React, { useState } from 'react'
import SearchBar from "../SearchBar/SearchBar"
import ProductTable from "../ProductTable/ProductTable"



function FilterableProductTable() {
    const [searchParam, setSearchParam] = useState('');
    const handleSearchParam = (event) => {
        setSearchParam(event.target.value);
      };

    return (
        <div>

        <h1>IronStore</h1>
        <SearchBar searchParam={searchParam}
          handleSearchParam={handleSearchParam}/>
        <ProductTable searchParam={searchParam} />
          
        </div>
    )
}

export default FilterableProductTable
