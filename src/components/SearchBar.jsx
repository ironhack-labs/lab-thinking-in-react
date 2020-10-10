import React from 'react';

class SearchBar extends React.Component {
  state = {
    search: '',
  };

  handleSearch = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    const value = event.target.value;
    const key = event.target.name;
    this.props.filterProduct(value);
    this.setState({
      [key]: value,
    });
  };

  render() {
    return (
      <div>
        <h4>Search</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            name="search"
            onChange={this.handleSearch}
            value={this.state.search}
          ></input>
        </form>
      </div>
    );
  }
}
export default SearchBar;
