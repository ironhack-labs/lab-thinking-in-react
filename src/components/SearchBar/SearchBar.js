import React from 'react'

function SearchBar({ search, onSearch, inStock  }) {

  const handleChange = (event) => {
    onSearch(event.target.value);
  };
  
  const handleCheck = (event) => {
    inStock(event.target.checked);
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
          <div>
          <input
            className="form-check-input"
            type="checkbox"
            onChange={handleCheck}
          />
          <label className="form-check-label ms-3">
            Only show products in stock
          </label>
        </div>
      </form>
    </div>
  )
}

export default SearchBar