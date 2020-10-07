import React from 'react';

class SearchBar extends React.Component {
  state = {
    search: '',
  };

  handleSearch = (event) => {
    //   console.log(event.target.name)
    //   console.log(event.target.value)
    const value = event.target.value;
    const key = event.target.name;
    this.setState({
      [key]: value,
    });
  };

  render() {
    return (
      <div>
        <h4>Search</h4>

        <input
          type="text"
          placeholder="Search"
          name="search"
          onChange={this.handleSearch}
          value={this.state.search}
        ></input>
      </div>
    );
  }
}
export default SearchBar;
