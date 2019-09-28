import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    // console.log(`Props from Searchbar`, this.props)

    const changeProductListingHandler= event => {
      // Get value from User Input and initialize value constant
      const { value } = event.target;
      // Lifting up state: Passing on data (value) from children (SearchBar) to parent (Filterable Product Table) via  same function `handleQuery()`
      this.props.handleQuery(value);
      console.log(value);
    }

    return (
      <div className="search-bar">
        <h2>Search</h2>
        <form action="">
          <label htmlFor="search"></label>
          <input
            type="search"
            className="search"
            id="search"
            onChange={changeProductListingHandler}
            />
        </form>
      </div>
    )
  }
}
