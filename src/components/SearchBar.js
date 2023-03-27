import React from 'react'

export default function SearchBar() {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center">

      <input type="text" className="form-control" id="search-bar" placeholder="Search product..." />
      <div className="form-check py-3">
        <input className="form-check-input" type="checkbox" value="" id="in-stock" />
        <label className="form-check-label" htmlFor="in-stock">Only show products in stock</label>
      </div>
    </div>
  )
}
