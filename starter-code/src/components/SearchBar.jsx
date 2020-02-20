import React from 'react'

export default function SearchBar({updateState}) {
  return (
    <div>
      <h1>Search</h1>
      <form onChange={updateState}>
        <input type="text" name="search" />
        <p>
          <input type="checkbox" />
          Only show products on stock
          </p>
      </form>
    </div>
  )
}
