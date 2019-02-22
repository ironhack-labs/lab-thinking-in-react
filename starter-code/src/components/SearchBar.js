import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Form.Group controlId="searchBar">
          <Form.Label>Search Bar</Form.Label>
          <Form.Control type="text" placeholder="search..." />
          <Form.Check
            custom
            type="checkbox"
            label="Only show products on stock"
            id="isAvailable"
          />
        </Form.Group>
      </div>
    );
  }
}

export default SearchBar;
