import React, { Component } from 'react';
import {data} from './data.json' //curly braces were added to access array
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        list: data
    }  
  }
  
  showProducts = () =>{
    return this.state.list.map((eachProduct,i)=>{
        return(
          <table key={i}>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>{eachProduct.name}</td>
              <td>{eachProduct.price}</td>
            </tr>
          </table>
        )
    })
  }

  

  render() {
    return (
      <div>
          <h1>IronStore</h1>
          <div>
          <h3>Search</h3>
                <input type="text" className="input search-bar" name="search" placeholder="Search" ></input>
                <input type="checkbox" name="stock">Only show products on stock</input>
                <input type="text" className="input search-bar" name="search" placeholder="Search" ></input>
                <input type="checkbox" name="stock">Only show products on stock</input> 
          </div>
          {this.showProducts()}
          </div>
    );
  }
}

export default App
