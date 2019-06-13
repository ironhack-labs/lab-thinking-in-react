import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ProductTable from './ProductTable';

class FilteredProductTable extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: this.props.data.data,
      allData: this.props.data.data,
      stocked: false,
      searchText: '',
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleSearch (text) {
    const oldText = this.state.searchText;
    let items;

    if (text !== oldText) {
      items = this.state.allData;
      const filteredItems = items.filter(e => {
        return e.name.toUpperCase().indexOf(text.toUpperCase()) > -1;
      })
      this.setState({ data: filteredItems })
    } else {
      this.setState({ data: this.state.allData });
    }

    this.setState({ searchText: text });
  }

  handleCheckbox (input) {
    let items = this.state.allData;
    if (input === true) {
      const filteredItems = items.filter(e => {
        return e.stocked === true;
      })
      this.setState({ data: filteredItems })
    } else {
      this.setState({ data: this.state.allData });
    }
  }

  render () {
    return (
      <React.Fragment>
        <h2>IronStore</h2>
        <SearchBar search={this.handleSearch} checkbox={this.handleCheckbox}/>
        <ProductTable items={this.state.data}/>
      </React.Fragment>
    )
  }
}

export default FilteredProductTable;