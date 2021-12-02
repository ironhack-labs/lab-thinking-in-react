import React from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';




function FilterableProductTable(props) {



    return (
      <div className="FilterableProductTable">
      <h1>IronStore</h1>
         <SearchBar/>
         <ProductTable products={props.products}/>
      </div>
    );
}

export default FilterableProductTable
