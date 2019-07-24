import React, { Component } from 'react';
import './main.css';
import SearchBar from '../searchbar/SearchBar';
import ProductTable from '../producttable/ProductTable';

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      productList: this.props.products.data,
      checked: false
    }
  }

  handleSearch = (e) => {
    this.setState({search: e.target.value})
  }

  handleCheckbox = (e) => {
    this.setState({checked: e.target.checked})
  }

  render() {
    return (
      <div className="container">
        <div className="title is-size-1 has-text-centered">
          IronStore
        </div>
        <div className="container has-text-centered">
          <SearchBar search={this.handleSearch} value={this.state.value} updateCheck={this.handleCheckbox}/>
        </div>
        <div className="container has-text-centered">
          <ProductTable products={this.state.productList.filter(item=>item.name.toUpperCase().includes(this.state.search.toUpperCase()))}
          showInStockOnly={this.state.checked}/>
        </div>
      </div>
    );
  }
}

export default Main;