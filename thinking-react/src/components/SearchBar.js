import React, { Component } from "react";
import data from "../data.json";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOn: false,
        value: ''
     };
  }

  searchStock = (e) => {
      console.log(e.target.value)
      let copy = !this.state.isOn
      this.setState({isOn: copy})
      this.props.onSearch(this.props.list, this.state.value, copy)
  }

  searchRegular = (e) => {
    let copy = e.target.value
    console.log("props", this.props)
    this.setState({value: copy})
    this.props.onSearch(this.props.list, e.target.value, this.state.isOn)
      
  }

  render() {
      let name;
      console.log(name  );
    return (
      <div>
        <fieldset>
          <input
            type="text"
            value={name}
            onChange={(e) => this.searchRegular(e)}
          />
        </fieldset>
        <input name="stock" value={name} type="checkbox" checked={this.state.isOn} 
        onChange= {(e) =>this.searchStock(e)} />
        <label>Show only products on Stock</label>
      </div>
    );
  }
}

export default SearchBar;
