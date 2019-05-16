import React from 'react'

export default function SearchBar(props) {
  return (
    <div>
      <input type="text" placeholder="Search.." onChange={props.onFilterBarChange} />
      <br/>
      <input type="checkbox" onChange={props.onStockFilterChange} /> Only show products in stock
    </div>
  )
}
