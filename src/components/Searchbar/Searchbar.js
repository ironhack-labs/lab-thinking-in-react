import React from 'react';



function SearchBar({search, setSearch, getProductsFilter }) {
  const handleChange = ({ target }) => {
    setSearch({
      search: target.value,
    });


  };

  return (
    <div>
      <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Search"
        value={search.search}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
