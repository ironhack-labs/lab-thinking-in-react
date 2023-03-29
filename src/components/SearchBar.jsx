import React from 'react'

export default function SearchBar({ search, onSearch, onShowStock }) {


  const handleChange = (ev) => {
    onSearch(ev.target.value)
  }

  const handleClick = () => {
    onShowStock()
  }

  return (
    <div>
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
        <input type="checkbox" id="stock" name="stock" value="" onChange={handleClick} />
        <label htmlFor="stock"> Only show products in stock</label>
      </div>
    </div>

  )
}
