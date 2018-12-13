import React from 'react'

const SearchBar = ({searchQuery, name, stocked}) =>{
    return ( <div>
    <input onChange={searchQuery} type='text' name='search' placeholder='Search...'/>
    <br/>
    <input onClick={searchQuery} type='checkbox' name='stock' id='stock'/>
    <label htmlFor="stock"> Only show products in stock </label>
    </div>
    )
} 

export default SearchBar