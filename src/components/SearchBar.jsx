import React from 'react'

function SearchBar(props) {

    const {searchValue, setSearchValue} = props

    const handleSearch= (e)=>{
        setSearchValue(e.target.value)
    }

  return (
    <div>
        <h3>Search Bar:</h3>
        <input  value={searchValue} type="text" placeholder= "Search products" onChange={handleSearch} />
    </div>
  )
}

export default SearchBar