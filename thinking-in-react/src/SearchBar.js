import React, {Component} from 'react';
import data from './data.json';
import './App.css';
import ProductTable from './ProductTable';

class SearchBar extends Component {
  render(){
    return(
      <form>
        <input type="text" onChange={(event) => this.props.filterProducts(event)} placeholder="Search..."/>
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