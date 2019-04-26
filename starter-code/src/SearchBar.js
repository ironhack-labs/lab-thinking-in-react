import React, { Component } from "react";

class SearchBar extends Component {
    
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }


    handleChange = (e) => {
        this.setState({search: e.target.value});
        this.props.searchValue(this.state.search)
    }

  render() {
     // console.log(this.state.search)
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
