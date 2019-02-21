import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form action="">
          <h3>Search</h3>
          <input type="text" />
          <p>
            <input type="checkbox" /> Only show products on stock
          </p>
        </form>
      </div>
    );
  }
}
