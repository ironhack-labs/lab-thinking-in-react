import React from 'react';

class SearchBar extends React.Component {


  handleChange = (event) => {
    this.props.setSearchField(event.target.value);
  };

  render() {
    return (
      <div className="search-bar">
        <label>
          Search:
          <input
            type="text"
            name="searchInput"
            placeholder="Search..."
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
