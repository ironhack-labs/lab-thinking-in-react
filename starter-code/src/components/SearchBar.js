import React from 'react'

export default function SearchBar() {
  return (
    <div>
      <form>
        <label className="label">Search:</label>
        <input
          className="input"
          type="search"
          placeholder="Search for products"
        />
      </form>
    </div>
  )
}
