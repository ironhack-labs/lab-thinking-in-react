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
    let { name, value } = event.target;

    if(event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    this.setState({
      [name]: value,
    });

    if(event.target.type === 'checkbox') {
      this.props.checkStock(value);
    } else {
      this.props.search(value);
    }
  }

  render() {
    return (
      <div>
        <p> Search</p>
        <div>
          <input type="text" name="searchWord" value={this.state.searchWord} placeholder="Find a product" onChange={this.handleChange} className="input" />
          <input onClick={this.handleChange} type="checkbox" name="onStock" value="onStock" checked={this.state.onStock} />
        </div>
        <label>Only show products on stock </label>
      </div>
    )
  }
}

export default SearchBar;