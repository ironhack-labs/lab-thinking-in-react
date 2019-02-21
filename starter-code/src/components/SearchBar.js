import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.props.onSearch}
        />

        <div>
          <input type="checkbox" onChange={this.props.onCheck}/>
          <label>Only shows products in stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
