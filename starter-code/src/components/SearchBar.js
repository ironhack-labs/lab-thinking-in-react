import React from 'react';

const SearchBar = (props) => {
    return (
      <>
        <h3>Search</h3>
        <input className="input" type="text" name="search" value={props.searchValue} onChange={e => props.handleSearch(e)}/>
        <input type="checkbox" name="showProducts" checked={props.showProducts} onChange={e => props.handleChange(e)} />  Only show products on stock
      </>
    );
  }

export default SearchBar;
