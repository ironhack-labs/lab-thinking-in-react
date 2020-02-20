import React, { Component } from 'react';
import dataJSON from '../data.json';

class SearchBar extends Component {
  state = {
    searchText: '',
    shopData: this.dataJSON
  };

  changeText = event => {
    //console.log('Searchbar enter ', event);
    //console.log('DATA >>> ', dataJSON);

    this.setState({
      searchText: event.target.value,
      shopData: dataJSON.data.filter(result => {
        console.log(result.name.includes(event.target.value));
        return result.name.includes(event.target.value);
      })
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="">Search</label>
        <br />
        <input value={this.state.searchText} onChange={this.changeText} />
        <p></p>
        <input type="checkbox" onChange={this.changeCheckBox} />

        <label htmlFor="">Only show products on stock</label>
      </div>
    );
  }
}

export default SearchBar;
