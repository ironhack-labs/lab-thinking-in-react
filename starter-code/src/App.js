import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data.json"
import ProductRow from "./components/ProductRow"

class App extends Component {
  state ={
    data
    
  }

  searchItem = (e) => {
    const input = e.target.value;
    const regEx = RegExp(input, "i")
    const filtered = data.filter (item => regEx.test(item.name))
    this.setState({data: filtered})
  }

  checkedFilter = (e) => {
    const checked = e.target.checked
    console.log(checked)
    if (checked) {
      const filtered2 = data.filter(item => {
        return item.stocked === true})
        console.log(filtered2)
      this.setState({data: filtered2})
    }else{
      this.setState({data})
    }
  }

  render() {
    const {data} = this.state
    
    let sportingItems = data.filter(item => {
      return item.category === "Sporting Goods"
    })

    let electronicItems = data.filter(item => {
      return item.category === "Electronics"
    })


    return (
      <div className = "filterable-product-table">
        <div className = "search-bar">
          <input 
              onChange={this.searchItem} 
              type="text" 
              placeholder="Search...." 
          />
          <p>
            Only show products in stock
            <input onChange={this.checkedFilter} type="checkbox"/>
          </p>
        </div>

        <div className = "product-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <tr>
              <th>Sporting Goods</th>
            </tr>
              
              {sportingItems.map((item, index) => {
              return <ProductRow key={index} {...item}/>
            })}

            <tr>
              <th>Electronics</th>
            </tr>

            {electronicItems.map((item, index) => {
              return <ProductRow key={index} {...item}/>
            })}

          </table>
        </div>
      </div>
     
    );
  }
}

export default App;
