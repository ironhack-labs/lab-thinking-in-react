import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
          <div className='search-bar'>
            <label>
              Search:
              <input type="text" name="search" />
            </label>
          </div>
        );
    }
}

export default SearchBar;