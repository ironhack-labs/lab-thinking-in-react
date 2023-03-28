import React, { useState } from 'react'

function SearchBar({ onChange }) {

  const [search, setSearch] = useState('')

  const handleChangeValue = (ev) => {
    setSearch(ev.target.value)
    onChange(search)
  }

  return (
    <div className="input-group justify-content-around m-4">
      <div className="form-outline">
        <label className="form-label" htmlFor="form1">Search</label>
        <input value={search} onChange={handleChangeValue} type="search" id="form1" className="form-control"/>
      </div>
    </div>
  )
}

export default SearchBar