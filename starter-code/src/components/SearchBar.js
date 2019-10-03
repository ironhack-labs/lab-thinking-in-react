import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="search-form" id="test">
          <input
            type="search"
            name="search"
            onChange={e => this.props.search(e)}
          ></input><br/>
          <label>Only show products in stock</label>
          <input
          type="checkbox"
          onChange={(e) => this.props.checkStock(e)}
        ></input>
        </form>
      </div>
    );
  }
}
