import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <div>
          <form>
            <input
              type="search"
              placeholder="Search..."
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
