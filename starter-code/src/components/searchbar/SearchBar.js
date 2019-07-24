import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="add-form">
          <legend>Search</legend>
          <input
            type="text"
            placeholder="what are you looking for"
            className="input"
            onChange={this.props.search}
            value={this.props.value}
          />

          <label className="checkbox">
            <input type="checkbox" onChange={this.props.check}/>
            Only show products in stock
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
