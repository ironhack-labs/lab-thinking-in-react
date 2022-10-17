import React, { useState } from 'react'

const myStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    backgroundColor: 'dodgerblue',
    color: 'white'
}

const SearchBar = (props) => {

    

    const { products, handleInputChange } = props;

  return (
    <div style={myStyle}>
        <p>Search</p>
        <input 
            type='text' 
            name='search' 
            value={products} 
            onChange={handleInputChange}
        />
        <p>Only show products in stock</p>
    </div>
  )
}

export default SearchBar