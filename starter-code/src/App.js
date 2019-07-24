import React, { Component } from 'react';
import alltheProducts from './data.json';
import './App.css';
import ProductRaw from './components/ProductRow.js';
import SearchBar from './components/SearchBar.js';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: alltheProducts.data,
      visibleProducts: alltheProducts.data,
      searchTerm: '',
      isChecked: false,

    }
  }

  showAllTheProducts = () => {
    return this.state.visibleProducts.map((eachProduct, i) => {
      return <ProductRaw key={i}
        theName={eachProduct.name}
        thePrice={eachProduct.price}
      />
    })
  }

  showItemsThatInStock = () => {
    return this.setState({isChecked: !this.state.isChecked})
  }

  searchForProducts = (e) => {
    let searchTerm = e.target.value;
    let clone = [...this.state.products];
    let result;

    if(this.state.isChecked){
      let inStock = clone.filter((product)=>{
        return product.stocked === true;
      });
      result = inStock.filter((product) => {
        return product.name.toUpperCase().includes(searchTerm.toUpperCase())
      });
    }else{
    result = clone.filter((product) => {
      return product.name.toUpperCase().includes(searchTerm.toUpperCase())
    })
  }
    return this.setState({ visibleProducts: result });
  }



  
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <div className="elements">
          <div className="search-bar-blue">
            <input type="checkbox" id="myCheck" onChange={(e) => { this.showItemsThatInStock(e) }}></input>
            <SearchBar search={(e) => { this.searchForProducts(e) }} />
          </div>
          <table className="table-green">
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>

            {this.showAllTheProducts()}

          </table>
        </div>
      </div>
    );
  }
}

export default App;