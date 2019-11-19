import React, { Component } from 'react';
import items from './data.json';
import './App.css';
import './components/SearchBox';
import SearchBox from './components/SearchBox';
import CheckBox from './components/CheckBox';
import ItemTable from './components/ItemTable';

export default class App extends Component {
  state = { items: items.data, onlyInStock: false };
  handleSearch = e => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredItems = items.data.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    this.setState({ items: filteredItems });
  };
  toggleInStock = () => {
    this.setState(prevState => ({ onlyInStock: !prevState.onlyInStock }));
  };
  render() {
    const { items, onlyInStock } = this.state;
    return (
      <div className="App">
        <div>
          <h1> IronStore </h1>
          <SearchBox handleSearch={this.handleSearch} />
          <CheckBox toggleInStock={this.toggleInStock} />
        </div>
        <div className="item-list">
          <ItemTable onlyInStock={onlyInStock} items={items} />
        </div>
      </div>
    );
  }
}
