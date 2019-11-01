import React, { Component } from 'react';

class SearchBar extends Component {
  searchTerm = e => {
    this.props.changeHandler(e.target.value);
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.searchTerm} />
      </div>
    );
  }
}

export default SearchBar;
