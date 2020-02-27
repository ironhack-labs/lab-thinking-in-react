import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      tick: false
    };
  }

  onChangeHandler = e => {
    let { name, value, checked } = e.target;
    name === "tick" && (value = checked);

    let status = { ...this.state };
    status[name] = value;

    this.setState(status, ()=> this.props.search(this.state))
  };

  render() {
    return (
      <div className="search">
        <h4>Search</h4>
        <input
          name="search"
          value={this.state.search}
          onChange={this.onChangeHandler}
        />
        <br />
        <input
          type="checkbox"
          id="tick"
          name="tick"
          checked={this.state.tick}
          onChange={this.onChangeHandler}
        />
        <label htmlFor="tick">Only show products on stock</label>
      </div>
    );
  }
}

export default Search;
