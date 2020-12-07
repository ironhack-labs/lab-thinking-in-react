import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import products from "./data.json"

class App extends Component {

  state={
    products: products.data,
    inputValue: ""
  }

  handleInputChange = (e) =>{
    this.setState({products: products.data.filter(product =>{
        return product.name.toLowerCase().includes(e.target.value.toLowerCase());
      }), inputValue: e.target.value
    })
  }

  handleCheckboxChange = (e) =>{
    if(e.target.checked){
      this.setState({products: this.state.products.filter(product =>{
        return product.stocked;
      })
    })
    }else{
      this.setState({products: products.data.filter(product =>{
          return product.name.toLowerCase().includes(this.state.inputValue.toLowerCase());
        })
      })
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Iron Store</h1>
        <SearchBar inputChange={this.handleInputChange} checkboxChange={this.handleCheckboxChange}></SearchBar>
        <ProductTable data={this.state.products}></ProductTable>
      </div>
    );
  }
}

export default App;
