import React from 'react'

export default function SearchBar({ search, onSearch, seeStock, onSeeStock }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  }

  const handleSeeStock = (event) => {
    onSeeStock(event.target.value);
  }

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center">

      <input type="text" className="form-control" id="search-bar" placeholder="Search product..." value={search} onChange={handleChange}/>
      <div className="form-check py-3">
        <input className="form-check-input" type="checkbox" value={seeStock} id="in-stock" onChange={handleSeeStock} />
        <label className="form-check-label" htmlFor="in-stock">Only show products in stock</label>
      </div>
    </div>
  )
}
