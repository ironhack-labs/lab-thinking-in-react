import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange = event => {
    // console.log(1);

    const { value } = event.target;
    this.props.handleQuery(value);
  };

  handleCheckboxChange = event => {
    const checked = event.target.checked;
    this.props.handleQueryCheck(checked);
  };

  render() {
    // console.log(4);
    console.log(this.props.checkState);
    return (
      <div>
        <div>
          <label htmlFor="query">Search</label>
        </div>
        <input
          type="text"
          name="query"
          value={this.props.search}
          onChange={this.handleChange}
        />
        <div>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={this.props.checkState}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="checkbox">Only show products on stock</label>
        </div>
      </div>
    );
  }
}
