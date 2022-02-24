import React from 'react'
import { useState } from 'react'
import JsonData from '../data.json';


 function SearchBar() {
  return (
      <div> <form className="d-flex">
          <input
              type="search"
              placeholder="Search"
              aria-label="Search"
          />
          <button variant="outline-success">Search</button>
      </form>
      </div>
  )
}
export default SearchBar