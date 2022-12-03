import React, {useState} from 'react'
import './styles.css'

const SearchBar = ({searchFn}) => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
    searchFn(e.target.value)
  }

  return (
    <div>
      <label>Search: </label>
      <input type='text' value={search} onChange={handleSearch} className='search' />
    </div>
  )
}

export default SearchBar