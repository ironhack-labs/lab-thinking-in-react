import React from 'react'

export const SearchBar = ({setQuery}) => {
    const handleSearchChange = event => {
		setQuery(event.target.value)
	}
  return (
    <>
        <input type="text" onChange={handleSearchChange}/>
    </>
  )
}
