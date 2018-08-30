import React from 'react'

const SearchPurple = ({handleSearch}) => <div>
  <input
    type="text"
    className="input-search"
    name="search"
    placeholder="Search"
    
    onChange={handleSearch}
  />
  <br></br>
  <label>
    <input type="checkbox"/>
    Only Show Products in Stock
  </label>

</div>

export default SearchPurple
