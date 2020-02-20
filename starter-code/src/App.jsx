import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchIronStore from './components/SearchIronStore';
import ListIronStore from  './components/ListIronStore';
import products from "./data.json"



export default class App extends Component {

  state= {
      data : products.data,
      stocked: false
  }       
        
  gettingInfosFromTheChild = msg => {
    const copy = [...products.data];
    const copy2 = copy.filter(p => p.name.toLowerCase().includes(msg.toLowerCase())    )
    this.setState( {data : copy2 }, console.log("data2", this.state.data));
  };

  gettingOtherInfosFromTheChild  = msg => {
        if (this.state.stocked == true ) {
            this.setState( {stocked : false})
        } else {
            this.setState( {stocked : true})
        }
        console.log(this.state.stocked);
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

        <SearchIronStore  clbk={this.gettingInfosFromTheChild} clbk2={this.gettingOtherInfosFromTheChild } />
        <ListIronStore data={this.state.data}  stock={this.state.stocked} />
       
       </div>
    );
  }
}
