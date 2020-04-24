import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="uk-margin">
        <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: user"></span>
            <input className="uk-input" type="text"/>
        </div>
    </div>
    )
  }
}

export default SearchBar;