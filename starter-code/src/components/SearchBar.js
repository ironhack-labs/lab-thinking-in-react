import React, {Component} from 'react';

const SearchBar = (props) => {

  const inputHandler = (event) => {
    props.filterProduct(event.target.value)
    
    console.log(event.target.value)
} 
  return(
    <input type='text' placeholder='search' onChange={(e) => inputHandler(e)}/>
  )
  
}

export default SearchBar;