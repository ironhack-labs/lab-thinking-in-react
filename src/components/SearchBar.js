import React from 'react'

export default function SearchBar(props) {
  return (
    <div>
        <h1>Search</h1>
        <input type="search" value={props.search} onChange={props.searchHandler}/>
        <input type="checkbox" onChange={props.checkboxHandler}/>Only show products in stock
    </div>
  )
}
