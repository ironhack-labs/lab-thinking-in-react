import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      ifShowOnlyOnStock: false
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name);
    console.log(value);

    this.setState({
      [name]: value
    }, () => this.props.onSearchInputChange(this.state))
  }

  render() {
    return (
      <div>
        <h3>Search</h3>
        <input onChange={this.handleInputChange} type="text" name="searchInput" value={this.state.searchInput} />
        <label>
          <input 
            name="ifShowOnlyOnStock"
            type="checkbox"
            checked={this.state.ifShowOnlyOnStock}
            onChange={this.handleInputChange} />
            Only show products on stock
        </label> 
      </div>   
    )
  }
}

