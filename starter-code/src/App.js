import React, { Component } from 'react';
import './App.css';
import products from './data.json'
import SeachBar from './components/SearchBar'
import ProductTable from './components/ProductTable'
import CategoryRow from './components/CategoryRow'

class App extends Component {
  state = {
    products: products.data,
    inStock: false
  }

  draw = () => {
    let { products } = this.state
    const { inStock } = this.state

    let categories = products.map(product => product.category)
      .filter((value, index, self) => self.indexOf(value) === index)
    if (inStock) products = products.filter((product) => product.stocked)
    return categories.map((category, index) => <CategoryRow products={products} category={category} key={index} />)
  }

  toggleStock = () => {
    let { inStock } = this.state
    inStock = !inStock
    this.setState({ inStock })
  }

  searchProducts = (e) => {
    console.log(e.target.value)
    const searchQuery = e.target.value
    const regEx = RegExp(searchQuery, 'i')

    const filtered = products.data.filter((product) => regEx.test(product.name))
    this.setState({ products: filtered })
  }

  render() {
    console.table(this.state.products)
    const { draw, searchProducts, toggleStock } = this
    return (
      <div className="App">
        <SeachBar searchProducts={searchProducts} toggleStock={toggleStock} />
        <ProductTable>
          {draw()}
        </ProductTable>
      </div>
    );
  }
}

export default App;
