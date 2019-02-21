import React, { Component } from "react";
import "./searchBar.css";

export default class SearchBar extends Component {
  state = {
    textSearch: "",
    checked: false
  };
  textSearchHandle = e => {
    this.setState(
      {
        ...this.state,
        textSearch: e.target.value
      },
      () => {
        this.props.searchsportProp(this.state.textSearch);
      }
    );
  };

  checkboxSearchHandle = e => {
    this.setState(
      {
        ...this.state,
        checked: !this.state.checked
      },
      () => {
        this.props.checkboxHandleProp(this.state.checked);
      }
    );
  };

  render() {
    return (
      <div className="searchBar">
        <div>
          <h2>Search</h2>
        </div>

        <div>
          <input
            type="text"
            onChange={this.textSearchHandle}
            value={this.state.textSearch}
          />
        </div>
        <div>
          <input
            name="checkbox"
            type="checkbox"
            onChange={this.checkboxSearchHandle}
            checked={this.state.checked}
          />
          <label for="checkbox">Only show products in stock</label>
        </div>
      </div>
    );
  }
}
