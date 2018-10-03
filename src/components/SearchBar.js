import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.useless = 0;
  }

  render() {
    return (
      <div className="field">
        <div className="control">
          <input className="input" placeholder="Search..." />
        </div>
        <div className="control">
          <label className="checkbox">
            <input type="checkbox" /> Only show products in stock
          </label>
        </div>
      </div>
    );
  }
}
