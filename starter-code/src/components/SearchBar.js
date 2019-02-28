import React, { Component } from "react";

class SearchBar extends Component {
  onChange = event => {
    const value = event.target.value;
    this.props.onSearch(value);
  };

  render() {
    this.props.blub;

    return (
      <div align="left">
        <br />
        <input onChange={this.onChange} type="text" placeholder="Your search" />
      </div>
    );
  }
}

export default SearchBar;