import { useState } from "react";

const SearchBar = ({ filter, setFilter, search, setSearch }) => {
  return (
    <div>
      <form>
        <label name="search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
        </label>
        <label>
          <input
            type="checkbox"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.checked);
            }}
          />
          Only show products that are in stock.
        </label>
      </form>
    </div>
  );
};
export default SearchBar;
