import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';
import './FilterableProductTable.css';

export default class FilterableProductTable extends Component {
  state = {
    products: [],
    search: '',
    stock: false
  }

  componentDidMount = () => {
    this.setState({ products: this.props.products })
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value
    })
  }

  render() {
    let products = this.state.products;

    if (this.state.stock) {
      products = this.state.products.filter(e => e.stocked)
    }

    const filteredProducts = products.filter(e => {
      return e.name.toLowerCase().includes(this.state.search.toLowerCase())
    })

    return (
      <div className='main'>
        <h1>IronStore</h1>
        <SearchBar 
          value={this.state.search}
          handleChange={this.handleChange} 
          stock={this.state.stock}
        />
        <ProductTable products={filteredProducts} />
      </div>
    )
  }
}
