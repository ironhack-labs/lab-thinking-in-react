import React from 'react'

function SearchBar() {
  return (
    <div>
      <form action="">
        <div className='m-3'>
          <div><label htmlFor="validationCustom01" className="form-label">Search</label></div>
          <div classNameName='w-100'><input type="text" className="form-control" id="validationCustom01" value="" required></input></div>
        </div>
        <div>
          <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
          <label className="form-check-label" htmlFor="invalidCheck">
            Only show products in stock
          </label>
        </div>
      </form>
    </div>
  )
}

export default SearchBar


