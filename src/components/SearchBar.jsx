import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    search: '',
  };

  handleChange = (event) => {
    const value = event.target.value;
    
    this.setState({
      search: value,
    });

    this.props.handleSearch({
      search: event.target.value,
    });

  };

  render() {
    return (
      <div>
        <h2>Search</h2>
        <form className="Form">
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
