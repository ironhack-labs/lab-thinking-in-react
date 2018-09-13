import React from 'react';
import './App.css';

class Search extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          name="textsearch"
          value={this.props.textsearch}
          onChange={this.props.handleSearch}>
        </input>
        <label>
          <input
            type="checkbox"
            onChange={this.props.handleCheckbox}>
          </input>
          Only show products that are in stock
        </label>
      </form>
    );
  }
}

export default Search;
