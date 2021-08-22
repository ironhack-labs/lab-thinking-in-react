import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-box">
        <p>Search</p>
        <input className="search-input" type="search" />
        <div className="checkbox">
          <label>
            <input type="checkbox" />
            Only show products in stock
          </label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
