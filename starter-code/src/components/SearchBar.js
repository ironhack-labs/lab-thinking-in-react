import React from 'react'
import { Mycontext } from '../context'

export default function SearchBar() {
  return (
    <div>
      <label className="label">Search:</label>
      <Mycontext.Consumer>
        {({ searchChange }) => (
          <input
            className="input"
            type="search"
            placeholder="Search for products"
            onChange={searchChange}
          />
        )}
      </Mycontext.Consumer>
    </div>
  )
}
