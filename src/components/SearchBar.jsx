import React from 'react'

const SearchBar = ({ value, handleSearch, stockValue, handleStock }) => {
  return (
    <div className="my-3">
      <input className="form-control form-control-lg" type="text" placeholder="Search" value={value} onChange={handleSearch} />
      <div className="form-check mt-2">
        <input className="form-check-input" value={stockValue} onChange={handleStock} type="checkbox" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Only show products on stock
        </label>
      </div>
    </div>
  )
}

export default SearchBar
