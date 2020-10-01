import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchParams: '',
  };

  handleSearchInput = (event) => {
    this.setState(
      { [event.target.name]: event.target.value },
      this.props.onChange(event.target.value)
    );
  };

  render() {
    return (
      <div className="field">
        <h3>Search</h3>
        <div className="control">
          <input
            type="text"
            placeholder="Search..."
            name="searchParams"
            value={this.state.searchParams}
            onChange={this.handleSearchInput}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
