import React, { Component } from 'react';
import './App.css';
import Searchbar from './Components/Searchbar';
import Producttable from './Components/Producttable';



export default class App extends Component {

  constructor(){
    super()
    this.state={
      search: '',
      onstock:false
    }
  }

  updateSearch(e){
    let search=e.target.value
    
    this.setState({
      ...this.state,
      search: search
    })
    
  }

  onStock() {
    
    this.setState({
      ...this.state,
      onstock: !this.state.onstock
    })

  }

  render() {

    return (
      <div className="App">
        <h1>IronStore</h1>
        <Searchbar onStock={()=>this.onStock()} updateSearch={(e)=>this.updateSearch(e)}/>
        <Producttable onStock={this.state.onstock} filterProducts={this.state.search} />
      </div>
    );
  }
}
