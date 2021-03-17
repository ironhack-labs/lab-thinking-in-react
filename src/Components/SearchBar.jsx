import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    name: ""
  }

  handleChange = (event) => {
    console.log(event);
    const name = event.target.name;
    const value = event.target.type === "checkbox" 
                  ? event.target.checked 
                  : event.target.value;

    this.setState({ [name]: value });

    this.props.searchProduct({name: value});

  };


  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleChange} type="text" name="name" placeholder="Search..." />
          <input onChange={this.handleChange} type="checkbox" name="stocked" id="stocked"/>
          <label htmlFor="stocked">Only show products in stock</label>
        </form>
      </div>
    )
  }
}

export default SearchBar;
