import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchInput: '',
  };

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value });
    this.props.filterProductsHandler(this.state.searchInput);
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
            value={this.state.searchInput}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
