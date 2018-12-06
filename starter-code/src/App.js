import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import ProductCategoryRow from "./components/ProductCategoryRow";
import ProductRow from "./components/ProductRow";

class App extends Component {
  constructor() {
    super();

    this.myData = data.data;
    this.myCheckedData = data.data
    this.myCategories = []

    this.state = {
      data: this.myData,
      check: false
      
    };

    this.categories = this.myData.map((element)=>element.category)
    this.categories.forEach(element => {
      if(!this.myCategories.includes(element)){
        this.myCategories.push(element)
      }
    })
    console.log(this.myCategories)
  }
  searchFilter = (e) => {
    this.myData = data.data
    this.myData = this.myData.filter((element)=>element.name.includes(e.target.value))
    this.setState({data: this.myData}) 
  }

  checkFilter = (e) => {
    
    this.myCheckedData = e.target.checked
    this.setState({check: this.myCheckedData}) 
  }

  render() {
    console.log(this.state.check)

    return (
      <div className="App">
        <div className="search-bar">
          <input type="text" placeholder="Search..." onChange={(e) => this.searchFilter(e)}/>
          <input type="checkbox" name="stock" id="stock" onChange={(e) => this.checkFilter(e)}/>
          <label>Only show products in stock</label>
        </div>
        <div className="table">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            {this.myCategories.map((element,index)=>{
              return(
              <ProductRow key={index} category={element} data={this.myData} state={this.state.check}/>)
            })}
              
          </table>
        </div>
      </div>
    );
  }
}

export default App;
