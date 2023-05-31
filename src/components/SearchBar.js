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
        <input type="text" value={searchBox} onChange={handleTextSearch} />
      </div>

      <div>
        <input
          type="checkbox"
          value={searchCheckedBox}
          onChange={handleCheckedBox}
        />
      </div>
    </>
  );
}

export default SearchBar;
