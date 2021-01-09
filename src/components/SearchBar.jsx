//receives a user's search term
import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    search: '',
  };
  handleValue = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  handleChange = (event) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
    this.props.handleFilter(value);
  };
  render() {
    return (
      <div>
        <label>Search</label>
        <input
          name="search"
          onChange={(event) => this.props.handleFilter(event.target.value)}
          name="searchValue"
          type="search"
        />
      </div>
    );
  }
}
