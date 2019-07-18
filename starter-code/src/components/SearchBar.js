import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
                <input
                    type="text"
                    placeholder="search products"
                    onChange={(e) => this.props.filterProducts(e)}
                    value={this.props.filterQuery}
                />
                <label>Only show products in stock</label>
                <input type="checkbox" onChange={(e) => this.props.filterStock(e)}></input>
            </div>
    )
  }
}
