import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    search: "",
    checkbox: false
  };

  handleChange = event => {
    // let { value } = event.target;
    // this.props.updateString(value);
    this.setState({ search: event.target.value });
    this.props.updateString(event.target.value);
  };

  handleCheckbox = event => {
    this.setState({ checkbox: event.target.checked });
    this.props.updateCheckBox(event.target.checked);
  };

  render() {
    return (
      <div className="SearchBar">
        <form>
          <div className="form-group">
            <label htmlFor="searchbar">Search</label>
            <input
              type="text"
              className="form-control"
              id="searchbar"
              name="searchString"
              value={this.props.searchString}
              placeholder="Enter search here"
              //   value={this.props.searchString}
              onChange={event => this.handleChange(event)}
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="checkbox"
              id="checkbox"
              checked={this.state.checkbox}
              onChange={event => this.handleCheckbox(event)}
            />
            <label className="form-check-label">
              Only show products on stock
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
