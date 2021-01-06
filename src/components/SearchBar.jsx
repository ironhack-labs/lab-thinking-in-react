import React, { Component } from 'react';

export default class SearchBar extends Component {


    state = {
        searchValue : "",
        searchArray: []

    }

    searchProduct = (evt) => {
        const valueSearched = evt.target.value

        this.setState({
            searchValue: valueSearched,
            products: [...this.state.products, valueSearched]
          });
        };
        

  render() {
    return (
      <div>
        <h4>Search</h4>
        <form>
          <input ></input>
        </form>
      </div>
    );
  }
}
