import React, { useState } from 'react'

function SearchBar({ onChangeSearch }) {
  const [search, setSearch] = useState('')
  const handleChange = (event) => {
    setSearch((prevSearch) => event.target.value)
    onChangeSearch(event.target.value)
  }

  return (
    <input type="text" placeholder='Search...' value={search} onChange={handleChange}/>
  )
}

export default SearchBar