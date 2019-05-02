import React from 'react'

class SearchBox extends React.Component {
  render() {
    return (
      <div>
        <h2>Search</h2>
        <input type="text" placeholder="Search product"/>
        <input type="checkbox" id="anyStock"/>
        <label htmlFor="anyStock">Only show products on stock</label>
      </div>
    )
  }
}

export default SearchBox;
