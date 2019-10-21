import React from 'react';


const SearchBar = (props) => {
  return (
    <>
      <p>Search</p>
      <input name="searchString" type='text' value = {props.searchString} onChange = {e => props.handleSearch(e)}/>
      <input name="onlyStock" type='checkbox' checked={props.onlyStock} onChange = {e => props.handleSearch(e)}/>
      <label>Only show products on stock</label>
    </>
  )
}

export default SearchBar;