import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { data, niko } from './data.json'
console.log(data)
export default class App extends Component {

  state = {
    products: data,
    checked: false
  }

  showProducts = () => {
    let newProducts = []
    if(this.state.checked){
      return this.state.products.map(eachProduct=> {
        return (
          <li className={(eachProduct.stocked ? 'instock' : 'outofstock') }>
            <span className="name" >{eachProduct.name}</span>
            <span className="price">{eachProduct.price}</span>
          </li>
        )
      })
    } else {
      return this.state.products.map(eachProduct=> {
        if(eachProduct.stocked){
          return (
            <li className={(eachProduct.stocked ? 'instock' : 'outofstock') }>
              <span className="name" >{eachProduct.name}</span>
              <span className="price">{eachProduct.price}</span>
            </li>
          )
        }
        return;
      })
    }
  }

  search = (e) => {
    console.log(e.target.value, this.state.checked)

      let newProducts = data.filter(eachProduct => {
        return (
          eachProduct.name.includes(e.target.value) // each product's name had some of the letters you typed 
          //
        )
      })

    this.setState({
      products:newProducts
    })
  }

  checkStuff = (e) => {
    console.log(e.target.checked)
    this.setState({
      checked: e.target.checked
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Store</h2>
        <form>
          <input type="text" onChange={this.search} placeholder="Search ...." name="search" />
        </form>
        <input className="checkbox" onChange={this.checkStuff} type="checkbox"></input>
        {this.showProducts()}


      </div>
    );
  }
}