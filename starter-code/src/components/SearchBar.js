import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="App">
        <header className="SearchBar">
          <form>
            <input type="text" name="search"/>
            <button>Search</button>
          </form>

        </header>
      </div>
    );
  }
}

export default SearchBar;
