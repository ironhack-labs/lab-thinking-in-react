import React, {Component} from 'react'
import Search             from './SearchBar';
import Table              from './ProductTable';

 const FilterableProductTable = ({handleSearch, handleStocked, products, categories}) =>{
  return(
    <div className="Filter">
      <Search handleSearch={handleSearch} handleStocked={handleStocked} />
      <Table products     ={products} categories={categories}/>
    </div>
  );
} 

export default FilterableProductTable
