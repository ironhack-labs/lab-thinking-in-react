import React from 'react'

export default function SearchBar({searchHandler}) {
  return (
    <div>
      <p><label>Search</label></p>
  
  <input onChange={searchHandler} type="text" name="Search"/> 

    </div>
  )
}
