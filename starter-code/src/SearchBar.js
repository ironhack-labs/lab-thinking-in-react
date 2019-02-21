import React from "react";

export default class SearchBar extends React.Component {
  handler= (e)=>{

    this.props.filter(e.target.value)
  }
  render() {
    return (
      <div>
        <h1 />
        <input
          type="text"
          onChange={this.handler}
          placeholder="Search for your product"
        />

        <div>
          <input type="checkbox" />
          <p>Only search for stock products</p>
        </div>
      </div>
    );
  }
}
