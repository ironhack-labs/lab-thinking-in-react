import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchStr: "",
      inStockOnly: false
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.searchProducts(this.state.searchStr);
    // clears the inputs again after the form has been submitted
    this.setState({
      searchStr: ""
    });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    let state = value;
    if (name === "inStockOnly") {
      state = e.target.checked;
      console.log(value, state);
    }

    this.setState(
      {
        [name]: state
      },
      () => this.props.searchProducts(this.state)
    );
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="searchStr"
          value={this.state.searchStr}
          onChange={this.handleChange}
        />
        <input
          type="checkbox"
          name="inStockOnly"
          onChange={this.handleChange}
          checked={this.state.inStockOnly}
        />
        <label for="inStockOnly">Only show products in stock</label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
