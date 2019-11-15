import React, { Component } from 'react';
import {data} from './data.json' //curly braces were added to access array
import './App.css';



export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        list: data,
        checkmark:false
    }  
  }
 
showProducts = () =>{
  if(this.state.checkmark){
  let stockedProducts = this.state.list.filter(eachProduct =>{ return eachProduct.stocked === true; })

  return stockedProducts.map((eachProduct,i)=>{
    return(  <table key={i}>
             <tr>
             <td style={{color:"black"}}>{eachProduct.name}</td> 
             <td>{eachProduct.price}</td>
             </tr>
             </table>
    )
})}
else{
    return this.state.list.map((eachProduct,i)=>{
        return(
            <table key={i}>
            <tr>
              {eachProduct.stocked ? <td style={{color:"black"}}> {eachProduct.name} </td>:<td style={{color:"red"}}>{eachProduct.name}</td>}
              <td>{eachProduct.price}</td>
            </tr>
          </table>
        )
    })
  }}

  searchProducts = (e)=>{
  // if I do: this.state.list instead of data.filter, 
  //the original data will not return when backspacing, 
  //this is because I'm setting the state of the array to the new filtered array
   let filteredProducts = data.filter(eachProduct =>{ 
     return eachProduct.name.toLowerCase().includes(e.target.value.toLowerCase())
   })
   this.setState({
     list:filteredProducts,
   })
  }



checkBoxChange = (e)=> {
  this.setState({
    checkmark: e.target.checked
  })}


  render() {
    return (    
      <div className = "container">
          <h1>IronStore</h1>
          <div className="search-section">
          <h4>Search</h4>
                <input type="text" className="search-bar" name="search" placeholder="Search" onChange={this.searchProducts}></input>
                <input type="checkbox" name="stock" onChange={this.checkBoxChange}></input><label>Only show products on stock</label> 
          </div>
          <tr className="products-title">
              <th>Name</th>
              <th>Price</th>
            </tr>
          {this.showProducts()}
          </div>
    );
  }
}


