import React from 'react'

class SearchBar extends React.Component {

  
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search</label>
          <input 
          type="text" 
          className="form-control"
          value=""
          ></input>
        </div>
      </form>
    )
  }
}
export default SearchBar