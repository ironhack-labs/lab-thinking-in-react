import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
          <form action>
            <h3> Search here </h3>
            <input type="text" placeholder="Search..." />
            <p>
              <input type="checkbox" /> Only show products in stock
            </p>
          </form>
        );
    }
}

export default SearchBar
