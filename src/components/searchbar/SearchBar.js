import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="field">
          <label htmlFor="search">Search</label>
          <input
            type="text"
            className="input is-info"
            name="search"
            id="search"
            onChange={this.props.onChange}
            placeholder="Put search words"
          />
        </div>
        <div className="filed">
          <label className="checkbox">
            Only Show Products in Stock
            <input
              type="checkbox"
              className="ml-3"
              name="onlyStock"
              id="onlyStock"
              onChange={this.props.onChange}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
