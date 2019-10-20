import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '', onlyStock: false };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    if (e.target.type === 'checkbox') {
      this.setState({ [e.target.name]: e.target.checked }, () => {
        const { searchText, onlyStock } = this.state;
        this.props.filterValues({ searchText, onlyStock });
      });
    } else {
      this.setState({ [e.target.name]: e.target.value }, () => {
        const { searchText, onlyStock } = this.state;
        this.props.filterValues({ searchText, onlyStock });
      });
    }
  }

  render() {
    return (
      <div>
        <h3>Search</h3>
        <input
          type="text"
          name="searchText"
          onChange={this.handleInput}
          value={this.state.searchText}
        />
        <input
          type="checkbox"
          name="onlyStock"
          onChange={event => {
            this.handleInput(event);
          }}
          value={this.state.onlyStock}
        />
        Only show products on stock
      </div>
    );
  }
}

export default SearchBar;
