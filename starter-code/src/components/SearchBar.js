import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="SearchBar">
        <input
          type="text"
          placeholder="Search..."
          name="query"
          onChange={event => this.props.changeHandler(event)}
        />
        <label>
          <input
            type="checkbox"
            onChange={event => this.props.buttonState(event)}
          />
          Only show products in stock
        </label>
      </section>
    );
  }
}

export default SearchBar;
