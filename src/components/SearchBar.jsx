import React from 'react';

export default function SearchBar({ setQuery }) {
  const handleSearchChange = e => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <input type="search" onChange={handleSearchChange} />
    </div>
  );
}
