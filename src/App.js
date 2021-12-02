import React from 'react';
import products from './data.json'
import './App.css';
import ProductTable from './Components/ProductTable/ProductTable';
import SearchBar from './Components/SearchBar/SearchBar'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      productsList: products.data,
      exists: false,
    }
  }


  findProduct = (product) => {
    console.log('>>>>>', this.state.productsList);
    let productListCopy = [...products.data]
    
    console.log('AAA', product);
    let copy = productListCopy.filter((elm) => elm.name.includes(product) )
    
    this.setState({
      productsList: copy
    })
  }

  changeCheckbox = () => {
    this.setState({
      exists: !this.state.exists
    })
  }


  stockChecker = () => {
    let stockedProducts = this.state.productsList.filter((elm) => elm.stocked === true)
    console.log(this.stockChecker)
    
    this.setState({
      productList: stockedProducts
    })
  }

  render() {
    return (
      <div>
        <SearchBar productWanted = {this.findProduct} />
        <div className="checkbox-container">
          <input onClick={this.changeCheckbox} id="checkbox" type='checkbox' />
          <p>Only products in stock</p>
        </div>
        <ProductTable products = {this.state.productsList} />
        {/* {this.state.exists && this.stockChecker} */}
      </div>
    );
  }
}

export default App;
