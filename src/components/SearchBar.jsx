import React from 'react';

export const SearchBar = ({ search, setSearch }) => {
  return (
    <>
      <h4>Search</h4>
      <input
        value={search}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </>
  );
};
