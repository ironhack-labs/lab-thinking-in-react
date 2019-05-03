import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    keyword: "",
    inStock: false
  }

  searchChanged(e) {
    let newKeyword = e.target.value.toLowerCase().trim();
    this.setState({
      ...this.state,
      keyword: newKeyword
    }, () => {
      this.props.searchFunc(this.state.keyword, this.state.inStock)
    })
  }

  inStockChanged(e) {
    let newInStock = e.target.checked;
    this.setState({
      ...this.state,
      inStock: newInStock
    }, () => {
      this.props.searchFunc(this.state.keyword, this.state.inStock)
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2>Search</h2>
        <form className="form">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                On stock
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  value={this.state.inStock}
                  onChange={(e) => this.inStockChanged(e)}
                />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with checkbox"
              onChange={e => this.searchChanged(e)}
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}
