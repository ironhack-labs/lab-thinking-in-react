import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  sendData = () => {
    this.props.parentCallback(this.state.query);
  };

  handleNameChange(event) {
    this.setState({
      query: event.target.value
    });
    console.log(this.state);
    this.sendData();
  }

  render() {
    return (
      <div>
        {' '}
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Search:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onChange={this.handleNameChange}
            placeholder="Look for a product"
            aria-label="Look for a product"
            aria-describedby="Look for a product"
          />
        </InputGroup>
      </div>
    );
  }
}

export default Search;
