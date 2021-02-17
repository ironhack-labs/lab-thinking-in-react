import React from 'react';

const SearchBar = ({ filter, query }) => {
  return (
    <section
      className="container"
      style={{ maxWidth: '50%', margin: '1em auto' }}
    >
      <h3 className="subtitle">Search</h3>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search ..."
        value={query}
        onChange={filter}
        className="input is-medium"
      />
    </section>
  );
};

export default SearchBar;
