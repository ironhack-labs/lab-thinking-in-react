import React, { Component } from 'react';
import Products from '../products/Products'


class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.searchInput = this.searchInput.bind(this);
  }
  searchInput (e) {
    this.setState({
      name: e.target.value
    });
  }

  render () {
    return (
      <form>
        <label>Name</label>
        <input type="text" name="name" value={this.state.name} onChange={(e) => this.searchInput(e)} />
        <Products nameList={this.state.name} />
      </form>

    );

  }

}
 export default Search;