import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './data.json';

class ProductBox extends Component {
  constructor(props) {
    super(props)
  }
  handleStyle(stocked){
    if(!stocked){
      return 'red';
    }
  }
  render() {
    return (
      <div>
        <p style={{color:this.handleStyle(this.props.stocked)}}>{this.props.name} {this.props.price} {this.props.stocked}</p>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { Products, listProducts: Products.data, categories: [] }
    // categories: this.state.listProducts.filter({ this.onlyUnique })
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  // uniqueCategories= () => {
  //   var arraytemp=this.state.listProducts.map(product=> product.category)
  //   var arrayCategories = arraytemp.filter(this.onlyUnique)
  //   this.setState({ categories: arrayCategories })
  // }

 

  render() {

    var arraytemp = this.state.listProducts.map(product => product.category)
    var arrayCategories = arraytemp.filter(this.onlyUnique)
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
        <div className="FilterableProductTable">

          <div className="searchBar">
            <input type="test" defaultValue="Search..." />
            <input type="checkbox" id="instack" name="feature"
              value="instock" />
            <label htmlFor="horns">Only show products in stock</label>
          </div>
          <div className="FilterableProductTable">

            {
              arrayCategories.map(product => {
                return (
                  <div key={product}>
                    <h2> {product}</h2>
                    <div>
                      {
                        this.state.listProducts.filter(productfilter => productfilter.category === product).map(product => {
                          return (
                            <ProductBox key={product.name} name={product.name} price={product.price} stocked={product.stocked} ></ProductBox>
                          )
                        })

                      }
                    </div>

                  </div>
                )
              })
            }

          </div>


        </div>
      </div>
    );
  }
}

export default App;
