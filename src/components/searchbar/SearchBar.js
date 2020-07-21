import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="serach"></label>
          <input
            type="text"
            className="form-control"
            name="search"
            id="search"
            onChange={this.props.onChange}
            placeholder="Put search words"
          />
        </div>
        <div className="form-check">
          <label className="form-check-label">
            Only Show Products in Stock
            <input
              type="checkbox"
              className="form-check-input"
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
