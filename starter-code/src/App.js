import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import ProductTable from './product-table';
import ProductCategoryRow from './product-category-row';
import ProductRow from './product-row'
import SearchBar from './searchbar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: data,
      search : '',
      check : false
    }
  }
  liveSearch = (e) => {
    this.setState({search : e})
  }

  checking = (e) => {
    this.setState({check : !this.state.check})
  }


  searchFilter = (items) => {
    return items.name.toLowerCase().includes(this.state.search)
  }
  render() {
    let productrowsportinggood
    let productrowelectronics
    if (this.state.check){
      productrowsportinggood = this.state.product.data.filter(element => { return element.category === "Sporting Goods" && element.stocked === true}).filter( this.searchFilter.bind(this)).map((element, index) => {
        return <ProductRow key={index} price={element.price} name={element.name} Color={element.stocked} checked={this.state.check}> </ProductRow>
      })
    } else {
      productrowsportinggood =  this.state.product.data.filter(element => { return element.category === "Sporting Goods"}).filter( this.searchFilter.bind(this)).map((element, index) => {
        return <ProductRow key={index} price={element.price} name={element.name} Color={element.stocked} checked={this.state.check}> </ProductRow>
      })
    }

    if (this.state.check){
      productrowelectronics = this.state.product.data.filter(element => { return element.category === "Electronics" && element.stocked === true}).filter( this.searchFilter.bind(this)).map((element, index) => {
        return <ProductRow key={index} price={element.price} name={element.name} Color={element.stocked} checked={this.state.check}> </ProductRow>
      })
    } else {
      productrowelectronics = this.state.product.data.filter(element => { return element.category === "Electronics"}).filter( this.searchFilter.bind(this)).map((element, index) => {
        return <ProductRow key={index} price={element.price} name={element.name} Color={element.stocked} checked={this.state.check}> </ProductRow>
      })
    }

    return (
      <div className="App">
              <SearchBar Searching={this.liveSearch} Checked={this.checking}></SearchBar>
        <ProductTable>
          <ProductCategoryRow label="Sporting Goods" >
            {productrowsportinggood}
          </ProductCategoryRow>
          <ProductCategoryRow label="Electronics" >
            {productrowelectronics}
          </ProductCategoryRow>
        </ProductTable>
      </div>
    );
  }
}

export default App;
