import React, { Component } from "react";

import "../App.css";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
      stock: false
    };
  }
  updateInput = e => {
    this.setState({ val: e.target.value });
    this.props.handleSearch(e.target.value);
  };

  render() {
    return (
      <div className="field">
        <label className="label">Search...</label>
        <div className="control">
          <input
            type="text"
            className="input"
            onChange={e => this.updateInput(e)}
            value={this.state.val}
          />
        </div>
        <p>
          <input
            type="checkbox"
            name="ShowStock"
            onChange={e => this.props.handleInStock(e)}
            value={this.state.stock}
            />
          Show only products in stock
        </p>
      </div>
    );
  }
}

export default Searchbar;
