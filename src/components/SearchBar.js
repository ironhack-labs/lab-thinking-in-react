import React from 'react';
function SearchBar({
  searchBox,
  searchCheckedBox,
  setSearchBox,
  setCheckedBox,
}) {
  const handleTextSearch = (event) => {
    setSearchBox(event.target.value);
  };
  const handleCheckedBox = (event) => {
    setCheckedBox(!searchCheckedBox);
  };
  return (
    <>
      <div>
        <input
          className="search-bar"
          placeholder="Search products..."
          type="text"
          value={searchBox}
          onChange={handleTextSearch}
        />
      </div>

      <div>
        <input
          className="check-box"
          type="checkbox"
          value={searchCheckedBox}
          onChange={handleCheckedBox}
        />
      </div>
    </>
  );
}

export default SearchBar;
