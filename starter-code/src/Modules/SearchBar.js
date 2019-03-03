import React from "react";

const SearchBar = ({ onChangeHandler, onChangeBox }) => {
  return (
    <div className="searchbar">
      <div>Search</div>
      <div className="container">
        <input
          type="text"
          name="searchedTerm"
          placeholder="Search for something"
          className="form-control"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="filterOnStock"
          value="onlyStock"
          onChange={onChangeBox}
        />{" "}
        Only Show only products on stock
      </div>
    </div>
  );
};

export default SearchBar;
