import React, { Component } from 'react';
import data from '../data.json';
import { Form, FormControl } from 'react-bootstrap';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // findSearchBar = e => {
  //   let dataInfo = [...this.props.dataInfo];
  //   console.log(dataInfo);
  //   let filteredItems = dataInfo.filter(elm =>
  //     elm.name.toUpperCase().includes(e.target.value.toUpperCase())
  //   );
  //   // this.setState({ data: filteredItems });
  //   console.log(filteredItems, 'filtered');
  // };
  render() {
    console.log(this.props);
    return (
      <Form inline>
        <FormControl
          onChange={this.props.findSearchBar}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Only show products in stock" />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchBar;
