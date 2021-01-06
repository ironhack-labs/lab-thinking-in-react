import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    searchInput: '',
  };

  //   handleChange = (event) => {
  //     console.log(event.target.value);
  //   };

  render() {
    return (
      <div>
        <label>Search</label>
        <input
          name="searchInput"
          type="search"
          onChange={this.props.handleFilterFromParent}
        />
        <input type="checkbox" onChange={this.props.handleCheckBoxFromParent} />{' '}
        Only show products in stock
      </div>
    );
  }
}

export default SearchBar;
