import React from 'react';

const SearchBar = ({ handleChangeTextField, searchFieldValue }) => {
  return (
    <div>
      <label>
        <b>Search</b>  
        <br />
        <input className="search" type="search" name="searchField" value={searchFieldValue} onChange={handleChangeTextField} />
      </label>
      <label>
        
        <br/>
        <input type="checkbox" name="" />
        only show products on stock
       
      </label>
     
    </div>
  );
}

export default SearchBar;

/* ONCHANGE -> para mostrar o conteúdo do input (metodo que está no FilterableProductTable)
SEACRHFIELD -> state do FilterableProductTable */