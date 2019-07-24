import React, { Component } from "react";
import './searchbar.css'

class SearchBar extends Component {
// search method

search = (e) => {
  let searchWord = e.target.value;
  // console.log(searchWord);
  this.props.dataFromSearch(searchWord)
}

  render() {
    return (
      <div>
        <form>
          {/* <legend for="search">Search</legend> */}
          <input type="text" onChange={this.search} name="search" id="search"></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;