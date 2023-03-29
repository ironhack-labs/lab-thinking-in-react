import React from 'react'

function SearchBar({ search, onSearch }) {
  const handleChange = (ev) => {
    onSearch(ev.target.value);
  };

  return (
    <div>
    <form>
        <span>Search</span>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className="form-control"
        />
      </form>
    </div>
  )
}

export default SearchBar