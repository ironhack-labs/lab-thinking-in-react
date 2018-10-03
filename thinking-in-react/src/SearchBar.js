import React, {Component} from 'react';
import data from './data.json';
import './App.css';

class SearchBar extends Component {
  render(){
    return(
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}

export default SearchBar;