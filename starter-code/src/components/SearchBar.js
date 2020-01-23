import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state= {
      searchWord: '',
      onStock: false,
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    this.props.search(value);
  }

  render() {
    return (
      <div>
        <p> Search</p>
        <div>
          <input type="text" name="searchWord" value={this.state.searchWord} placeholder="Find a product" onChange={this.handleChange} className="input" />
          <input type="checkbox" value="onStock" checked={this.state.onStock} />
        </div>
        <label>Only show products on stock </label>
      </div>
    )
  }
}

export default SearchBar;