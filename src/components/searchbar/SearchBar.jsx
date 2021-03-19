import React from 'react';

const SearchBar = ({searchValue, handleChange}) => {

  return(
    <input type="text" name='searchValue' value={searchValue} onChange={(e)=>handleChange(e)} placeholder='Search Product'/>
  )
}

export default SearchBar;