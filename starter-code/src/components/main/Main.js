import React, { Component } from 'react';
import './main.css'
import SearchBar from '../searchbar/SearchBar.js'
import ProductTable from '../producttable/ProductTable.js'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allTheProducts: props.products.data,
      visibleProducts: props.products.data,
      onlyShowStocked: false,
    }
  }

  toggleSearch = () => {
    this.setState({onlyShowStocked: !this.state.onlyShowStocked});
  }

  search = (e) => {
    let clone = [...this.state.allTheProducts];
    let searchTerm = e.target.value;
    let filteredList = clone.filter((eachProduct)=>{
      return eachProduct.name.toUpperCase().includes(searchTerm.toUpperCase())
    })
    this.setState({visibleProducts: filteredList})
  }

  render() {
    return (
      <div className="Orange">
        <h3>IronStore</h3>
        <SearchBar searchFunction = {this.search} toggleSearchFunction = {this.toggleSearch} />
        <ProductTable products = {this.state.visibleProducts} toggleBoolean = {this.state.onlyShowStocked} />
      </div>
    );
  }
}

export default Main;