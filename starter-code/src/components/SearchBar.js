import React, { Component } from "react";

class SearchBar extends Component {
  render({handleChange} = this.props) {
    return (
      <div className="uk-margin">
        <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: user"></span>
            <h4>Search</h4>
            <input className="uk-input" type="text" onChange={handleChange}/>
            <h5>Only show products on stock</h5>
        </div>
    </div>
    )
  }
}

export default SearchBar;