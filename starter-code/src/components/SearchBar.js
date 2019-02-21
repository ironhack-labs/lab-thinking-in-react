import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    search: "",
    stockCheck: false
  };

  textFormHandler = e => {
    let newState = {
      ...this.state,
      search: e.target.value
    };

    console.log(e.target.value);

    this.props.handlerFunction(newState.search, newState.stockCheck);

    this.setState(newState);
  };

  checkboxFormHandler = e => {
    let newState = {
      ...this.state
    };

    newState.stockCheck = !newState.stockCheck;

    console.log(newState.stockCheck);

    this.props.handlerFunction(newState.search, newState.stockCheck);

    this.setState(newState);
  };

  render() {
    return (
      <div>
        <div className="row align-items-center">
        <div className="col">
          <input className="form-control mt-3 mb-3"
            onChange={this.textFormHandler}
            type="text"
            name="searchQuery"
            placeholder="enter your query"
          />
          </div>
        </div>
        <div className="row align-items-center">
        <div className="col">
        <div className="form-check">
          <input className="form-check-input"
            onChange={this.checkboxFormHandler}
            type="checkbox"
            id="onlyStock"
            name="onlyStock"
            value="withStock"
          />
          <label className="form-check-label" htmlFor="onlyStock">Only show products on stock</label>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
