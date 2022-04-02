import React, { Component } from 'react';
import { Input, Checkbox } from '@chakra-ui/react';

class SearchBar extends Component {
  state = {
    text: '',
    checkbox: false,
  };

  handleChange(event) {
    let { name, value } = event.target;
    if (name === 'text') {
      this.props.searchHandler(value);
    }
    if (name === 'checkbox') {
      this.props.checkboxHandler(value);
    }
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <Input
          type="text"
          name="text"
          placeholder="Search"
          value={this.state.text}
          onChange={(e) => this.handleChange(e)}
        />
        <Checkbox
          my={4}
          type="checkbox"
          name="checkbox"
          value={this.state.checkbox}
          onChange={(e) => this.handleChange(e)}
        >
          {' '}
          In Stock?{' '}
        </Checkbox>
      </div>
    );
  }
}

export default SearchBar;
