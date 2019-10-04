import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {

  render() {
    return (
        <ol className="search-bar">
          <li>
            <label for="search">SEARCH PRODUCTS</label>
            <div>
              <input id="search" placeholder="Find products" type="text" onChange={e => this.props.searchProducts(e.target.value)}/>
              <ol>
                <li>
                <input id="stocked" type="checkbox" onChange={() => this.props.toggleStocked()}/>
                <label for="stocked">Stock</label>
                </li>
              </ol>
            </div>
          </li>
        </ol>
    )
  }
}
