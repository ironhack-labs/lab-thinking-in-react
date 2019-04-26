import React, { Component } from "react";

class SearchBar extends Component {
    

    handleChange = (e) => {
        this.props.searchValue(e.target.value)
    }

  render() {
    return (
      <div>
        <input className="input is-rounded" type="text" placeholder="Search" onChange={this.handleChange}/>
        <label className="checkbox">
          <input type="checkbox" />
            Only show products on stock
        </label>
      </div>
    );
  }
}

export default SearchBar;
