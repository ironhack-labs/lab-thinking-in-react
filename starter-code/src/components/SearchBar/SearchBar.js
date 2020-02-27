import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="App">
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          onChange={e => this.props.functionSearchBarCom(e)}
        />
        <input
          type="checkbox"
          onChange={e => this.props.functionCheckBoxCom(e)}
        />
      </div>
    );
  }
}

export default SearchBar;
