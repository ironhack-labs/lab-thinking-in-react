import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange = e => {
    this.props.updateSearchText(e.target.value);
  };

  render() {
    return (
      <div>
        <input value={this.props.search} onChange={this.handleChange} />
      </div>
    );
  }
}
