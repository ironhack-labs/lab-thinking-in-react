import React from 'react';
import { Component } from 'react';
import { Row } from 'react-bootstrap';
class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      stockChecked: false,
    };
  }

  handleInputChange(e) {
    const { name, type } = e.target;
    const inputValue = type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState(
      {
        [name]: inputValue,
      },
      () => {
        this.props.searchHandler(this.state.search);
        this.state.stockChecked && this.props.stockCheckHandler();
      }
    );
  }

  render() {
    return (
      <>
        <Row>Search</Row>
        <Row>
          <input
            name="search"
            type="text"
            value={this.state.search}
            onChange={(e) => this.handleInputChange(e)}
          ></input>
        </Row>
        <Row>
          <input
            name="stockChecked"
            type="checkbox"
            value={this.state.stockChecked}
            onChange={(e) => this.handleInputChange(e)}
          ></input>
        </Row>
      </>
    );
  }
}
export default SearchBar;
