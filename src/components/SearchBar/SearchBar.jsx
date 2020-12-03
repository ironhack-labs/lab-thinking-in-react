import React from 'react'

const SearchBar = (props) => {
  const {handleChange, questions} = props
  return (
    <div>
    <form>
      <label for='search'>Search </label>
        <input 
          id='search'
          name='search' 
          handleChange={handleChange}
          type='text' 
          placeholder='Enter input here' />
      </form>
    </div> 

  )
}



export default SearchBar
