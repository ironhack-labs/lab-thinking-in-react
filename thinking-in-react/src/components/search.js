import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      showUnstocked: true
    };
  }

  updateInput = e => {
    this.setState(
      {
        searchTerm: e.target.value
      },
      () => {
        this.props.doTheSearch(this.state.searchTerm, this.state.showUnstocked);
      }
    );
  };

  toggleStocked = () => {
    this.setState({ showUnstocked: !this.state.showUnstocked }, () => {
      this.props.doTheSearch(this.state.searchTerm, this.state.showUnstocked);
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <label>Search</label>
          <input type="text" name="searchTerm" onChange={this.updateInput} />
        </div>
        <div>
          <label>Only show products in stock</label>
          <input type="checkbox" onClick={this.toggleStocked} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
