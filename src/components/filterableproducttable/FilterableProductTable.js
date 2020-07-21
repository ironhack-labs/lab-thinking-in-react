import React, { Component } from 'react';
import SearchBar from '../searchbar/SearchBar';
import ProductTable from '../producttable/ProductTable';

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '', onlyStock: false };
    this.handleOnSearchChange = this.handleOnSearchChange.bind(this);
  }
  handleOnSearchChange(event) {
    console.log(event.target);
    this.setState({
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-two-fifths">
            <h1 className="title is-1 is-spaced">Iron Store</h1>
          </div>
          <div className="column"></div>
        </div>
        <div className="columns">
          <div className="column"></div>
          <div className="column is-two-fifths">
            <SearchBar onChange={this.handleOnSearchChange} />
          </div>
          <div className="column"></div>
        </div>
        <ProductTable
          products={this.props.products}
          search={this.state.search}
          stock={this.state.onlyStock}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
