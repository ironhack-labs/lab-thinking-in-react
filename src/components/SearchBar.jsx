import React, { useState } from 'react'

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const handleChange = (ev) => {
    const value = ev.target.value;
    setSearch(value)
  }

  
  return (
    <div>
      <form className="flex items-center justify-center flex-col" >
        <label
          className="block text-sm font-medium text-gray-900 mt-4"
          htmlFor="Search">Search</label>
        <input
          value={search}
          onChange={handleChange}
          className="bg-gray-100 border border-gray-500 text-gray-900 text-sm rounded-md focus:ring-blue-100 focus:border-blue-200 p-1 w-10/12"
          type="text"
          id="Search" />
        <div>
          <input type="checkbox" id="stock" name="stock" value="" />
          <label htmlFor="stock"> Only show products in stock</label>
        </div>
      </form>
    </div>

  )
}
