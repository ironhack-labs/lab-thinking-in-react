import React from 'react';

export default function SearchBar(props) {

  return (
    <div class="searchbar">

      <label htmlFor="search">Search</label><br />
      <input type="text" value={props.value}
        onChange={e => props.onSearch(e.target.value)} /><br />
      <input type="checkbox" name='stock' 
        onChange={e => props.onTick(e.target.checked)} />
      <label htmlFor="stock">only show products in stock</label>
    
    </div>
  )

}