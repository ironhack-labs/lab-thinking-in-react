import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <h3>Search</h3>
        <input> {this.props.data}</input>
        <h3>Only show products on stock</h3>
      </div>
    )
  }
}

export default SearchBar;