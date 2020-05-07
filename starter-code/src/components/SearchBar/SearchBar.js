import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    let handleChange = (event) => {
      if (event.target.type === 'text') {
        this.props.updateSearch(event.target.value);
        console.log('changed val');
      }
      if (event.target.type === 'checkbox') {
        this.props.updateChecked(event.target.checked);
        console.log('changed check');
      }
    };

    return (
      <div>
        <h4>Search</h4>
        <form>
          <input
            type="text"
            placeholder="Search here..."
            value={this.props.search}
            onChange={handleChange}
          />
          <br />
          <input
            type="checkbox"
            name=""
            id="stock"
            value={this.props.checked}
            onChange={handleChange}
          />
          <label htmlFor="stock">Only show Products on stock</label>
        </form>
      </div>
    );
  }
}
