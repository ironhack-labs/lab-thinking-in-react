import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class Filterable extends Component {
  state = {
    products : this.props.products.data
  }
  handleSearch = (query) =>{
    this.setState({
      products : this.props.products.data.filter(e=>e.name.toLowerCase().includes(query.toLowerCase()))
    })
  }
  showStock = (boolean) => {
    this.setState({
      products : this.props.products.data.filter(e=>e.stocked===boolean)
    })
  }
  render() {    
    return (
      <div className="App">
        <SearchBar search={this.handleSearch} stock={this.showStock} />
        <ProductTable products = {this.state.products}/>
      </div>
    );
  }
}

export default Filterable