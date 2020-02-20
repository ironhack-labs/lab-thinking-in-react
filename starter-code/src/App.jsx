import React, { Component } from 'react';
import logo from './logo.svg';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

export default class App extends Component {
  state = {
    data: data,
    searchText: '',
    inStock: false
  };

  updateSearchText = text => {
    this.setState({ searchText: text });
  };

  handleCheck = () => {
    console.log(this.state.inStock);
    this.setState({ inStock: !this.state.inStock });

    if (this.state.inStock) {
      // remove sold out stuff
    } else {
      // show all stuff
    }
  };

  // handleRole = event => {
  //   let key = event.target.name;

  //   this.setState({ [key]: !this.state[key] }, () => {
  //     console.log(this.state[key]);

  //     let renderedList;

  //     if (this.state[key]) {
  //       renderedList = usersJSON.filter(user => {
  //         return user.role.includes(key);
  //       });
  //     } else {
  //       renderedList = usersJSON;
  //     }

  //     this.setState({ users: renderedList });
  //   });
  // };

  render() {
    return (
      <div className="App">
        <FilterableProductTable
          inStock={this.state.inStock}
          search={this.state.searchText}
          handleCheck={this.handleCheck}
          updateSearchText={this.updateSearchText}
          products={this.state.data}
        />
      </div>
    );
  }
}
