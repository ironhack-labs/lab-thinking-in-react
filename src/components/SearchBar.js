import React from 'react'

export default function SearchBar(props) {  
  return (
    <div>
        <h5>Search</h5>
        <input type="text" value={props.search} onChange={props.handleSearchInput}></input>
    </div>
  )
}
