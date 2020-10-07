import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    search: '',
  };

  handleChange = (event) => {
    const value = event.target.value;

    this.props.handleSearch({
      search: this.state.name,
    });

    this.setState({
      search: value,
    });
  };

  render() {
    return (
      <div>
        <h2>Search</h2>
        <form className="Form" onSubmit={this.handleSubmit}>
          <input
            id="search"
            autoComplete="off"
            className="search"
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
