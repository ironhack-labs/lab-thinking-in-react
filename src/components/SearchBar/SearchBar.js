import React, { useState } from 'react'

 function SearchBar(searchProduct) {

  const [search, setSearch] = useState('');

  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Search</h1>
      <input
      className='border mr-4'
        value={search}
        onChange={(ev) => {
          setSearch(ev.target.value);
        }}
      />
    </div>
  )
}
export default SearchBar