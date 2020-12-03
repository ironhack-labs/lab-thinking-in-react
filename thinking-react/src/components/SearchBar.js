import React, { Component } from "react";
import { Form, FormControl } from 'react-bootstrap'


class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
        
    }
  }

  handleInputChange = e => {

    const value = e.target.value

    this.setState({
      name: value

      
    },
      // () => polizon
    )
  }


  render() {
    return (
      <Form inline className="searchbar">
        <input type="text" name="name" placeholder='search' value={this.state.name} onChange={this.handleInputChange}/>
        <br />
      </Form>
    );
  }
}

export default SearchBar
