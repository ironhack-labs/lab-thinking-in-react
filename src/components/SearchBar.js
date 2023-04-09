import { useState } from "react";

function SearchBar(props) {

  const {search, onSearch} = props
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search.."
          name="search"
          value={search}
          onChange={onSearch}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchBar