import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './Components/main/Main';
import './App.css';
import data from '../src/data.json';


class App extends Component {
constructor(props){
    super(props)
    this.state={

      data:data.data,
      products: data.data
      
    }
}


TheSearch = (val) => {
  var capInput = val.toUpperCase();
  const newProduct = this.state.data.filter( (prod) => {
    return prod.name.toUpperCase().includes(capInput)
  })
  this.setState({
    products : newProduct
  })
}

  render() {

    return (
      <div className='main'>

      <Main Theproducts={ this.state.products } newSearch={this.TheSearch} /> 

      </div>
    );
  }
}

export default App;
