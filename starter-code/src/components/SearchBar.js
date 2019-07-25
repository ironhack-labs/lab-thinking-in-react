import React, { Component } from "react";
import "../App.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  search = e => {
    e.preventDefault();
    // let clone = [...this.state.products];
    // console.log("clone", clone);
    let searchInput = e.target.value;

    // let filteredList = clone.filter(eachProduct => {
    //   //   console.log("each", eachProduct);
    //   return eachProduct.name.toUpperCase().includes(searchInput.toUpperCase());
    // });
    this.props.dataFromChildren(searchInput, e.target.value);
    // this.setState({ products: filteredList, searchTerm: e.target.value });
  };
  render() {
    return (
      <form>
        <div className="search">
          <h5>Search</h5>
          <input
            type="text"
            placeholder="search something"
            // value={this.state.searchTerm}
            onChange={this.search}
          />
        </div>
      </form>
    );
  }
}

export default Search;
