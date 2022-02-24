import { useState } from 'react'


function SearchBar(props) {
    return (
    <>
        <label htmlFor="search">Search</label>
        <input type="text" onChange={e => props.onQueryChange(e.target.value)}/>
    </>
    )
  }



export default SearchBar; 
