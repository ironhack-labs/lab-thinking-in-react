import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchIronStore from './components/SearchIronStore';
import ListIronStore from  './components/ListIronStore';
import products from "./data.json"



export default class App extends Component {

  state= {
      data : products.data,
  }       
        
  gettingInfosFromTheChild = msg => {
    console.log("the child just called back !", msg);
    const copy = [...products.data];
    const copy2 = copy.filter(p => p.name.includes(msg)    )           
    console.log("data1", this.state.data);
    this.setState( {data : copy2 }, console.log("data2", this.state.data));
  };      
        
        
  render() {
 
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <SearchIronStore  clbk={this.gettingInfosFromTheChild} />       
        <ListIronStore data={this.state.data}  />
       
       </div>
    );
  }
}
