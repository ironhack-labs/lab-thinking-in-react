import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          placeholder="enter search"
          name="search"
          className="searchText"
        />
        <br />
        <input type="checkbox" name="instockonly" id="instockonly" />
        <label htmlFor="instockonly">Only show products on stock</label>
      </div>
    );
  }
}

export default SearchBar;
