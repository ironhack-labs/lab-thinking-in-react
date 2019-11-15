import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <>
        <div className="form-group">
          <form
            onChange={e => {
              this.props.handleSearch(e);
            }}
          >
            <label htmlFor="search">Search</label>
            <input type="text" name="search" className="form-control" />
          </form>
        </div>
        <div className="form-group">
          <form>
            <input type="checkbox" />
            <label htmlFor="checkbox">Only show products in stock</label>
          </form>
        </div>
      </>
    );
  }
}
