import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    search: '',
  };

  handleInput = (e) => {
    this.setState({
      search: e.target.value,
    });
    this.props.onChange(e.target.value);
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <input
          className="inputSearch"
          id="search"
          type="text"
          name="search"
          value={search}
          onChange={this.handleInput}
          placeholder="Search"
        ></input>
      </div>
    );
  }
}
