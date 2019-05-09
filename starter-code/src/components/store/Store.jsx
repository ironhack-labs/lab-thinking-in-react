import React, { Component } from 'react';
import Search from '../search/Search';
import ProductList from '../product-list/ProductList';
import './store.css'

class Store extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: this.props.products.data
    }
    this.searchItem = this.searchItem.bind(this);
  }

  searchItem(searchValue) {
    const searchedItem = [...this.props.products.data] 
    searchedItem.filter((el) => {
        return el.name.includes(searchValue)
    })
    this.setState({
      data: searchedItem
    })
  }

  render() {
    return(
      <div className="store">
        <h1>Random Store</h1>
        <h2>Returning you the best</h2>
        <Search fn={this.searchItem}/>
        <ProductList data={this.state.data} />
      </div>
    )
  }
}

export default Store;
