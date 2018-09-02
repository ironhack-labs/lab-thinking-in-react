import React, { Component } from 'react';
import './App.css';
import Filter from './components/FilterableProductTable';
import Products from './data.json';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {products: Products.data, showStockedOnly: false, search:''}
  }

  updateProducts = (search, checked) =>{

    var searchProducts = [];
    Products.data.forEach(product => {
      if(product.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0)
      {
        if(!product.stocked)
        {
          if(!checked)
          {
            searchProducts.push(product);
          }
        }
        else{
          searchProducts.push(product);
        }
      }
    });

    this.setState({
      products : searchProducts
    });
  }
  
  handleSearch = (e) =>{
    var searchProducts = [];

    this.updateProducts(e.target.value, this.state.showStockedOnly);

    this.setState({
      search: e.target.value
    });
  }

  handleStocked = (e) =>{

    this.updateProducts(this.state.search, e.target.checked);

    this.setState({
      showStockedOnly: e.target.checked
    });

  }

  render() {
    let products = this.state.products;
    let categories = [];
    products.forEach(product => {
      if(!categories.includes(product.category))
      {
        categories.push(product.category);
      }
    });

    return (
      <div className="App">
        <Filter handleSearch={this.handleSearch} handleStocked={this.handleStocked} products={products} categories={categories} />
      </div>
    );
  }
}

export default App;
