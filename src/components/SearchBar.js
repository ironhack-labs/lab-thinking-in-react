import React from 'react';
//import {useState} from 'react'

export default function SearchBar (props) {
  //const [search, setSearch] = useState('')
  const handleSearchChange = event => {
      props.setQueryProps(event.target.value)
}

  const handleIsInStock = event => {
    props.setInStockProps(event.target.checked)
  }

  return(
      <div>
          <p>Search</p>
          <input 
              type="text"
              value={props.queryProps}
              placeholder="Search by name"
              name="input" 
              onChange={handleSearchChange}
          />
          <br />
          <input type="checkbox" onChange={handleIsInStock} checked={props.inStockProps} />Only show products in stock
      </div>
  )
}
