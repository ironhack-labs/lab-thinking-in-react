import React, { Component } from "react";

class SearchBar extends Component {
  constructor({ productsData }) {
    super({ productsData });
    this.state = {
      initialList: { productsData },
      newList: []
    };
  }

  componentDidMount = () => {
    this.setState({
      newList: this.state.initialList
    });
  }

  onChangeHandler = (e) => {
    var updatedList = this.state.initialList;
    updatedList = updatedList.filter(item => {
      return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      newList: updatedList
    });
    if (updatedList === 0) {
      this.setState({
        message: true
      });
    } else {
      this.setState({
        message: false
      });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="title"
          placeholder="Search..."
          onChange={e => this.onChangeHandler(e)}
        />
        <br />
        <input
          type="checkbox"
          name="stock"
          onChange={e => this.onChangeHandler(e)}
        />
        <label>Only show products in stock</label>
      </div>
    );
  }
}

export default SearchBar;
