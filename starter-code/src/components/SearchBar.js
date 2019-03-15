import React, { Component } from "react";


class SearchBar extends Component {

  handleChangeSearch = (e) => this.props.onSearch(e.target.value);
  handleChangeCheck = (e) => this.props.onCheck(e.target.checked)

  render = () => (
    <div className="searchBar m-3">
      <input className="form-control" type="text" placeholder="Search" value={ this.props.keyword } onChange={ this.handleChangeSearch }/>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" onChange={ this.handleChangeCheck } id="exampleCheck1"/>
        <label className="form-check-label"htmlFor="exampleCheck1">Only show products in stock</label>
      </div>
    </div>
  )
}

export default SearchBar;

