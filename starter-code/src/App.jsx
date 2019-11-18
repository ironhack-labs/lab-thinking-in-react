import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cat from './images/ironhack-logo.svg';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      productList: data.data,
      viewableList: data.data,
      checked: false,
    };
  }
 
  showProducts = () => {
    let newProducts = []
    if (!this.state.checked){

      return this.state.viewableList.map((item, i) => {
        return (
          <tr className={item.stocked ? 'instock' : 'outofstock'}>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      );
    });
  } else {
      return this.state.viewableList.map((item, i) => {
        if (item.stocked){

          return (
            <tr className={item.stocked ? 'instock' : 'outofstock'}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          )
        }
        return;
      })
    }
  }


  

  search = (e) => {
      let newProducts = data.data.filter(eachProduct => {
        return eachProduct.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      this.setState({
        viewableList: newProducts
      })
  
    }
  
    
    checkStock = (e) => {
      this.setState({
        checked: e.target.checked
      })
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={cat} className="App-logo" alt="logo" />
          <h1 className="App-title">IronStore</h1>
        </header>
        <div className="App">
          <div className="search">
            <input
              type="text"
              name="search"
              placeholder=" Search"
              className="searchbar"
              onChange={this.search}
            ></input>
            </div>
            <div className='checkboxDiv'>
             <form className='check'>
             <input className='checkbox' type='checkbox' onChange={this.checkStock}></input>
             <h3>Only show items in stock</h3>
             </form> 
            </div>
          <>
            <div className="theTable">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                  </tr>
                </thead>
                {this.showProducts()}
              </table>
            </div>
          </>
        </div>
      </div>
    );
  }
}

export default App;
