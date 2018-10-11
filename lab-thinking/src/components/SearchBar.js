import React, {Component} from 'react'
 const SearchBar = ({handleSearch, handleStocked}) =>{
  return(
    <div className="Search">
      <div>
        <input
          type       ="text"
          placeholder="Search..."
          onChange   ={handleSearch}
        />
      </div>
      <div>
        <input
          type="checkbox"
          onChange={handleStocked}
        />
        Only show products in stock
      </div>
    </div>
  )
} 

export default SearchBar