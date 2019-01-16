import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      filteredList: [],
      checkBox: true
    };
  }

  handleSearchBar(e) {
    let initialList = [];
    let newList = [];

    if (e.target.value !== "") {
      initialList = this.props.prodData;
      newList = initialList.filter(prod => {
        const lc = prod.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
      this.setState({ filteredList: newList });
    } else {
      newList = this.props.prodData;
      this.setState({ filteredList: newList });
    }
    this.props.filtered(newList);
  }

  handleCheckbox() {
    this.setState({ checkBox: !this.state.checkBox });
    let stockProd = this.state.filteredList.filter(prod => prod.stocked);
    this.state.checkBox
      ? this.props.filtered(stockProd)
      : this.props.filtered(this.state.filteredList);
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
              this.handleSearchBar(e);
            }}
          />

          <label className="checkbox">
            <input
              type="checkbox"
              onClick={() => {
                this.handleCheckbox();
              }}
            />
            Only show products in stock
          </label>
        </div>
      </section>
    );
  }
}
