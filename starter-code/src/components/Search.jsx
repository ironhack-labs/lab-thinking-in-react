import React, { Component } from 'react';

export default class Search extends Component {
  handleChange = event => {
    const { value } = event.target;
    console.log(value);
    this.props.handleQuery(value);
  };
  render() {
    return (
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="search"
          value={this.props.query}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
