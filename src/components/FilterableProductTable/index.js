import React, { Component } from 'react';
import ProductTable from '../ProductTable';
import SearchBar from '../SearchBar';
import CheckBox from '../CheckBox';
import './styles.css';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      search: '',
      isChecked: true,
    };
  }

  handleInput = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleCheckBox = (e) => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    const { products, search, isChecked } = this.state;
    return (
      <div>
        <h1> IronStore </h1>
        <SearchBar
          name="search"
          type="text"
          value={search}
          handleInput={this.handleInput}
        />
        <CheckBox value={isChecked} handleInput={this.handleCheckBox} />
        <ProductTable filter={search} products={products} stock={isChecked} />
      </div>
    );
  }
}
