import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.products.data,
      search: '',
    }
  }

  inputHandler(event) {
    let { value } = event.target;
    if (value) {
      this.setState({
        search: value,
      })
      let newData = [...this.state.data.filter(data => data.name.toLowerCase().includes(this.state.search.toLowerCase()) ? data : false)]
      this.setState({
        data: newData,
      })
    } else {
      this.setState({
        data: this.props.products.data,
        search: ''
      })
    }
  }

  render() {
    return (<div>
      <SearchBar inputHandler={(val) => this.inputHandler(val)} search={this.state.search} />
      <ProductTable data={this.state.data} />
    </div>)
  }
}

export default FilterableProductTable;