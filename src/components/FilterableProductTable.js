import React, {Component} from 'react';
import Search from './SearchBar';
import Table from './ProductTable';

export default ({handleSearch, handleStocked, products, categories}) =>{
  return(
    <div className="Filter">
      <Search handleSearch={handleSearch} handleStocked={handleStocked} />
      <Table products={products} categories={categories}/>
    </div>
  );
}