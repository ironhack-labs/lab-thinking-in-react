import React, { Component } from "react";
import "./App.css";
import list from "./data.json";
import Table from "./components/Table";
import SearchBar from "./components/search";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: list.data,
      visibleItems: list.data
    };
  }

  refineItemList = (query, showUnstocked) => {
    console.log("yep");
    let clone = [...this.state.items];
    let newList = clone.filter(eachThing => {
      if (showUnstocked) {
        return eachThing.name.toUpperCase().includes(query.toUpperCase());
      } else
        return (
          eachThing.stocked &&
          eachThing.name.toUpperCase().includes(query.toUpperCase())
        );
    });

    this.setState({
      visibleItems: newList
    });
  };

  render() {
    return (
      <div>
        <h1>Ironstore</h1>
        <SearchBar doTheSearch={this.refineItemList} />
        <Table allItems={this.state.visibleItems} />
      </div>
    );
  }
}
