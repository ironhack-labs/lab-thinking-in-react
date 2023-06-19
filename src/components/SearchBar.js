import React, { useState } from 'react';


function SearchBar(props) {
    const [searchValue, setSearchValue] = useState("")
  
  function changeValue (el){
    props.filterFunction (el.target.value)
   


  }
  return(
      <div>
        <label >Search the site:
<input type="search" value={searchValue} name="search" onChange={changeValue}></input>
</label>
      </div>    
  )
}

export default SearchBar;