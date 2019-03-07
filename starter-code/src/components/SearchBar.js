import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {

  handleChange (e) {
    this.props.filterTheProducts(e.target.value)
  }

  render() {
    return (
      <div className="App">
        <header className="SearchBar">
          <form>
            <input type="text" name="search"onChange={(e) => this.handleChange(e)}/>
            <button type="submit">Search</button>
          </form>
        </header>
      </div>
    );
  }


}

export default SearchBar;
