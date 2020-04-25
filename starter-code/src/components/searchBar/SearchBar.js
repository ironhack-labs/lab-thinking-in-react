import React, { Component } from "react";
import './searchBar.css';

class SearchBar extends Component {
  render({handleChange, checkIs} = this.props) {
    return (
      <div className="uk-margin">
        <div className="uk-inline">
            <h4>Search products</h4>
            <input className="uk-input" type="text" onChange={handleChange}/>
          <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label className="test"><input className="uk-checkbox" type="checkbox" onChange= {checkIs}/> Only show products on stock</label>
        </div>
      </div>
    </div>
    )
  }
}

export default SearchBar;