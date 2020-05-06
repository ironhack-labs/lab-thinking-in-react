
import React from 'react'

function SearchBar({callbackSearch, callbackStock}) {
  
  return (
    <div className='search'>

      <input className="search__input" type="text" onChange={callbackSearch} placeholder="Search..."/><br></br>
      
      <label htmlFor="stock">In stock only</label><br></br>
      <input name='stock' className="search__checkbox" type="checkbox" onChange={callbackStock}/>

    </div>

  )  
  
}

export default SearchBar