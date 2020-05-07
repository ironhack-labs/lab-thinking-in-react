import React, { Component } from 'react'
import Search from './Search';
import Table from './Table';
import CheckBox from './CheckBox';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    query: '',
    isChecked: false
  };

  setQuery = query => {
    this.setState({
      query: query
    });
  };
  

  handleSearch = (event) => {
      console.log(this.event.value)
    const filteredArray = this.props.products.filter((product) => {
      return product.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({ products: filteredArray });
  };

  render() {
    return (
      <div>
        <Search setQuery={this.setQuery} query={this.state.query} />
        <CheckBox isChecked={this.state.isChecked}/>
        <Table query={this.state.query} products={this.state.products} />
      </div>
    )
  }
}

export default FilterableProductTable;