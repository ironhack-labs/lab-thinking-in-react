import React, { Component } from "react";

export default class SearchBar extends Component {
  handleChange(e) {
    let initialList = [];
    let newList = [];

    if (e.target.value !== "") {
      initialList = this.props.prodData;
      newList = initialList.filter(prod => {
        const lc = prod.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.prodData;
    }

    this.props.filtered(newList);
  }

  render() {
    return (
      <section className="section">
        <div className="container" id="SearchBar">
          <input
            className="input"
            type="text"
            placeholder="Search products..."
            onChange={e => {
              this.handleChange(e);
            }}
          />

          <label className="checkbox">
            <input type="checkbox" />
            Only show products in stock
          </label>
        </div>
      </section>
    );
  }
}
