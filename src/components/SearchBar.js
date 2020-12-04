import React, { Component } from 'react'

export default class SearchBar extends Component {

   handleSearchChange = event => {
        console.log("this is SearchBar.js' handleSearchChange");
        this.props.setQuery(event.target.value);
    }
   

    render() { 
        console.log("thisisSearchBar.js. Und this.props: ", this.props)
        return (
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="search">Search: </label>
              <input 
            type="text"
            name="search"
            id="search"
            value={this.props.query}
            onChange={this.handleSearchChange}
              />
              <button type="submit">Search</button>
              <br />
              {/* <label htmlFor="inStock">Student</label> */}
     {/* <input
            type="checkbox"
            name="inStock"
            id="inStock"
            checked={this.state.student}
            onChange={this.handleStudentCheckboxChange}
            />
            <label htmlFor="inStock">in Stock</label> */}
            </form>
        )
    }
}
