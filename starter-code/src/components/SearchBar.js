import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      stockFilter: false
    };
  }

  handleChange = e => {
    if (e.target.type === "checkbox") {
      this.props.stock(e.target.checked);
    } else {
      this.props.searchTheText(e.target.value);
    }
  };

  render() {
    return (
      <div>
        <form>
          <label>Search:</label>
          <input type="text" name="search" onChange={this.handleChange} />
          <input type="checkbox" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
