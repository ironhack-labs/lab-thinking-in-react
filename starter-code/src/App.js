import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data.json"
import ProductRow from "./components/ProductRow"

class App extends Component {


  state ={
    data
  }

  //search Item
  searchItem = (e) => {
    const input = e.target.value;
    const regEx = RegExp(input, "i")
    const filtered = data.filter (item => regEx.test(item.name))
    this.setState({data: filtered})
  }


  //check if box is filled
  checkedBox = (e) => {
    const checked = e.target.checked
    if (checked) {
      const filtered = data.filter(item => {
        return item.stocked === true})
      this.setState({data: filtered})
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

      
      <div>


      <div>
        <input onChange={this.searchItem} type="text" placeholder="Search...."  />
        <p>
          Show only products in stock
          <input onChange={this.checkedBox} type="checkbox"/>
        </p>
      </div>


      <div>
            <div>
            <h2>Sporting Goods</h2>
            </div>

            <table>
            <th>Name</th>
            <th>Price</th>
            </table>

            {sportingItems.map((item, index) => {
            return <ProductRow key={index} {...item}/>
          })}
            <div>
            <h2>Electronics</h2>
            </div>

          {electronicItems.map((item, index) => {
            return <ProductRow key={index} {...item}/>
          })}
      </div>


    </div>
    );

  }
}

export default App;
