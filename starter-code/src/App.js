import React, { Component } from 'react';
import './App.css';
import ProductRow from "./components/ProductRow";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";
import products from "./data.json";

class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      search: '',
      showInStock: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick(e) {
    this.setState( prevState => {
      return {
        showInStock: !prevState.showInStock
      }
    })
  }

  filterSearch(product) {
    if(this.state.showInStock) {
      return product.name.toLowerCase()
        .includes(this.state.search.toLowerCase()) && product.stocked
    }
    return product.name.toLowerCase().includes(this.state.search.toLowerCase())
  }

  render() {

    return (
      <div className="filterable-products-table">
        <h1>IronStore</h1>
        <div className="search-bar">
          <h3>Search</h3>
          <SearchBar search={this.search} onSearch={this.handleChange} onCheck={this.handleClick}/>
        </div>
        <div className="product-table">
          <ProductTable
            th1="Name"
            th2="Price"
            tableRows={products
              .filter( product => this.filterSearch(product))
              .map( product => 
                <ProductRow name={product.name} price={product.price} className="product-row"/>
                )}
          />
        </div>
      </div>
    );
  }
}

export default App;
