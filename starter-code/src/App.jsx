import React, { Component } from 'react';
//import {Link} from 'react-dom'
import './App.css';
import {data} from './data.json';

export default class App extends Component {


showItems = ()=>{
  return data.map(eachProduct=>{
    return <li>
      
     <span className="name">{eachProduct.name}</span> 
     <span className="price">{eachProduct.price}</span> 
    
    </li>
  })
}

  render() {
    return (
      <div className ='App'>
        
          IronShop
          <div className ="searchbar">
            <form>
          Search
          <input placeholder="helololllololololololol"/>
        </form>
          </div>
        <div>FOOODSS</div>
        <div className="list-group">
                {this.showItems()}
                {console.log(data)}
              </div>
        </div>
      
    );
  }
}
