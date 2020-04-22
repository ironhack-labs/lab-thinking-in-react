import React, { Component } from 'react';
import '../App.css';

export default class SearchBar extends Component {
  state = {
    search: '',
    onlyStock: false,
  };

  handleInput = (e) => {
    const { target } = e;
    const { name } = target;
    const value = name === 'onlyStock' ? target.checked : target.value;
    console.log(`Input name: ${name}, value: ${value}`);
    this.setState({
      [name]: value,
    }, () => {
      const { setFilter } = this.props;
      setFilter(value);
    });
  };

  render() {
    const { search, onlyStock } = this.state;
    return (
      <div className='search-bar'>
          <label id='search-box-label' htmlFor='search-box'>Search</label>
          <input
            type='text'
            placeholder='iPhone'
            id='search-box'
            name='search'
            value={search}
            onChange={this.handleInput}
          />
          <div>
            <input
              type='checkbox'
              name='onlyStock'
              id='checkbox'
              checked={onlyStock}
              onChange={this.handleInput}
            />
            <label htmlFor='checkbox'>Only show products in stock</label>
          </div>
      </div>
    );
  }
}
