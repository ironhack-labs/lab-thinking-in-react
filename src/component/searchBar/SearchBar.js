import React from "react";

const SearchBar = ({searchTerm}) => {
  const [searchInput, setSearchInput] = React.useState("");

  const handleSearch = ({ target }) => {
    // console.log(target.value);
    setSearchInput(target.value);
    searchTerm(target.value)  //passing the search input
  };

  return (
    <div>
      <h1>Searchbar</h1>
      <input
        type="text"
        placeholder="Search for an item"
        value={searchInput}
        onChange={handleSearch}
      />
      <br />
      <label htmlFor="inStock">Only show products in stock</label>
      <input 
        type="checkbox" 
        name="inStock" 
        id=""
      />
    </div>
  );
};

export default SearchBar;
