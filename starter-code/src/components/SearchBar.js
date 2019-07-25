import React from 'react';

const SearchTable = (props) => {
  return (
    <input 
    className="search" 
    type="text" 
    value={props.state.search} 
    onChange={props.search} 

    />
  )
}

export default SearchTable