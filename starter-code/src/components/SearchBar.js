import React, { Component } from "react";

class SearchBar extends Component {
  render({handleChange, checkIs} = this.props) {
    return (
      <div className="uk-margin">
        <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: user"></span>
            <h4>Search</h4>
            <input className="uk-input" type="text" onChange={handleChange}/>
        </div>
        <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label><input className="uk-checkbox" type="checkbox" onChange= {checkIs}/> Only show products on stock</label>
        </div>
    </div>
    )
  }
}

export default SearchBar;