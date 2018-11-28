import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar.js';
import ProductCat from './components/productTable/ProductCategoryRow';
import products from "./data.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products.data,
      showOnlyStocked: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleShowStocked = this.toggleShowStocked.bind(this);

  }

  toggleShowStocked() {
    this.setState({
      showOnlyStocked: !this.state.showOnlyStocked
    })
  }

  categorizeProducts() {
    let categories = [];
    this.state.products.map((element) => {
      if(!categories.includes(element.category)){
        let newElement = element.category
        categories.push(newElement)
      }
    });
    return categories;
  }

  handleSearch(e) {
    console.log("meu piru de oculos!!!");
    const productList = [...products.data];
    const newProductList = productList.filter(element => element.name.includes(e.target.value))
    this.setState({
      products: newProductList
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBar handleSearch={this.handleSearch} toggle={this.toggleShowStocked} />
        <table>
            <thead>
                <tr>
                    <th className="title">Name</th>
                    <th className="title">Price</th>
                </tr>
            </thead>
          {this.categorizeProducts().map((cat, idx) => {
            return <ProductCat key={idx} category={cat} {...this.state} />
          })}
        </table>
      </div>
    );
  }
}

export default App;
