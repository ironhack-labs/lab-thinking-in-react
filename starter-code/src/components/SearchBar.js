import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    query: "",
    instockonly: false
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    console.log('searchbar', name, value);

    if (name === 'instockonly') {
      value = !this.state.instockonly;
    }

    this.setState({ [name]: value });
  }

  render() {
    const { query, instockonly } = this.state;

    return (
      <form>
        <input name="query" type="text" value={query} onChange={this.handleChange} />
        <input name="instockonly" type="checkbox" checked={instockonly} value="on" onChange={this.handleChange} />
      </form>
    );
  }
}

export default SearchBar;