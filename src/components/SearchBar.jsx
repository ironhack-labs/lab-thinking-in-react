import React from 'react'

const SearchBar = ({ findProducts, toggleUnavailable, showUnavailable }) => {

  const handleFilterProducts = (e) => {
    findProducts(e.target.value);
  }

  const handleToggleUnavailable = (e) => {
    toggleUnavailable(e.target.checked);
  }

  return (
    <div className='col'>
      <div className="row">
        <input className="col form-control form-control-lg" type="search" onChange={handleFilterProducts} placeholder="Search ..." />
      </div>
      <div className="row justify-content-center">
        <div className="col"></div>
        <div className="col-12 col-md-auto form-check mt-2">
          <input className="form-check-input" type="checkbox" name="toggleUnavailable" onChange={handleToggleUnavailable}/>
          <label className="form-check-label" htmlFor="toggleUnavailable">{showUnavailable ? "Hide" : "Show"} items that are out of stock</label>
        </div>
        <div className="col"></div>
      </div>
  </div>
  )
}

export default SearchBar