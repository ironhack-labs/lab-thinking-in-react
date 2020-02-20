import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleOnChange = event => {
    this.props.updateSearchText(event.target.value);
  };

  handleOnCheck = event => {
    console.log(event.target.checked);
    this.props.updateCheckStatus(event.target.checked);
  };
  render() {
    return (
      <form action="">
        <input
          type="text"
          value={this.props.search}
          onChange={this.handleOnChange}
          placeholder="Search for a Product Name"
        />
        <div>
          <input
            type="checkbox"
            checked={this.props.checkStatus}
            onChange={this.handleOnCheck}
            id="checkbox"
          />
          <label htmlFor="checkbox"> Only show products on stock</label>
        </div>
      </form>
    );
  }
}
