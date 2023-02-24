import React from 'react'

const SearchBar = ({search}) => {

// const handleChange = (e) => {
//   search(e.target.value)
// }

  return (

    <div>
      <label>Search</label>
     <input 
        placeholder='Search Product'
        onChange={search} 
        type='text'
        id="id">
      </input>
    </div>
  )
}

export default SearchBar