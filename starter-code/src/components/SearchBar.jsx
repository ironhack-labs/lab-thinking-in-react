import React from 'react'

const SearchBar = ({clbk}) => {

  return (
    <div className="search-bar">
      <div>Search</div>
      <div><input onChange={(e) => clbk('search', e.target.value)} className="text-input" type="text"/></div>
      <div><input onChange={(e) => clbk('instock', e.target.checked)} type="checkbox" name="inStock"/><label htmlFor="inStock">Only show products in stock</label></div>
    </div>
  )
}

export default SearchBar;
