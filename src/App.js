import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import products from './data.json'

class App extends Component {

  createContent = () => {
    const arrProducts = []
    for(let i=0; i<products.data.length; i++){
      if(products.data[i].stocked === false) {
        arrProducts.push(
          <li><span style={{color: 'red'}}>{products.data[i].name}</span> &nbsp;&nbsp;&nbsp; {products.data[i].price}</li>
        )
      }else{
        arrProducts.push(
          <li><span>{products.data[i].name}</span> &nbsp;&nbsp;&nbsp; {products.data[i].price}</li>
        )
      }
    }
    return arrProducts;
  }
  
  
  onChange = (e) => {
    const {value} = e.target   
    let li = document.getElementsByTagName('li');
    for (let i = 0; i < this.state.arrProducts.length; i++) {
      if(this.state.arrProducts[i].name.indexOf(value) > -1) {
        li[i].style.display = "";
      }else{
        li[i].style.display = "none";
      }
     
    }
  }


changeType = (e) => {
  if(e.target.checked){
    let li = document.getElementsByTagName('li');
    for (let i = 0; i < this.state.arrProducts.length; i++) {
      if(this.state.arrProducts[i].stocked === true) {
        li[i].style.display = "";
      }else{
        li[i].style.display = "none";
      }
     
    }
  } else {
    let li = document.getElementsByTagName('li');
    for (let i = 0; i < this.state.arrProducts.length; i++) {     
        li[i].style.display = "";
    }
  }
}



  constructor(){
    super()

    const arrProducts =[]
    for(let i=0; i<products.data.length; i++){
      arrProducts.push({...products.data[i]})
    }
    this.state={
      arrProducts
    }
  }


  render() {
    return (
      <div className="App">

        <div className="SearchBar">
          <input onChange={this.onChange} type="search" placeholder="Search" ></input> <br/>
          <input onChange={this.changeType} type="checkbox" name="stock" ></input> <label>Only show products in stock</label> <br/>
        </div>

        <div className="FilterableProductTable">
          <span>Name</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>Price</span>
          <ul>
            {this.createContent()}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
