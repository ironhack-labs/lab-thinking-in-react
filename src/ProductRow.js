import React, { Component } from "react";
import Categories from "./data.json";

export class Red extends Component {
  constructor(props) {
    super(props);
    this.className = "red";

    this.state = {
      categories: Categories
    };
  }

  render() {
    return (
      this.state.categories.data.map(e => {
        if(e.category == "Sporting Goods"){
      return <div className={this.className} />;
        }else if(e.category == "Electronics"){
          return <div className={this.className} />;
        }
      })
    )}
    }
