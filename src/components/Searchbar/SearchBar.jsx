import React from 'react';

const SearchBar = ({ handleChange, search }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="search product"
          onChange={handleChange}
          value={search}
        />
      </form>
    </div>
  );
};

export default SearchBar;
