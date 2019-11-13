import React, { Component } from 'react';
import './App.css';
import theData from './data.json'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: theData.data,
      search: '',
      toggled: false,
    }
  }

  searchBar = (e) =>{
    
    this.setState({
      [e.target.name]: e.target.value,
    },()=>{
      let tempList = [...theData.data]
      let finalList = tempList.filter(each => each.name.toLowerCase().includes(this.state.search.toLowerCase()))
      this.setState({
        list: finalList
      })
    })
  }

  updateInput = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>{
      console.log(this.state)
    })
  }

  decideRed = (e) =>{
    console.log('ok')
    if(e.target.stocked){
      e.target.className = "red"
    }else{
      e.target.className = "blue"
    }
  }

  toggleStocked = () =>{
    this.setState({
      toggled: !this.state.toggled
    })
  }

  allItems = () =>{
    return this.state.list.map((eachItem, i)=>{
      let red = "";
      if(!eachItem.stocked){
        red = "red"
      }
      if(this.state.toggled){
        if(red === ""){return (
          <div className="box" key={i}>
            <strong>{eachItem.category}</strong>
            <p>
                <span className={red}> {eachItem.name} </span>
                <small>{eachItem.price}</small>
            </p>
          </div>
        )}
      }else{
        return (
          <div className="box" key={i}>
            <strong>{eachItem.category}</strong>
            <p>
                <span className={red}> {eachItem.name} </span>
                <small>{eachItem.price}</small>
            </p>
          </div>
        )
      }
    })
  }



  render() {
    return (
      <div className="App">
      Stocked Only: <input type="checkbox" onClick={this.toggleStocked}></input>
      <input type="text" value={this.state.search} className="searchFood" 
      name="search" onChange = {this.searchBar} placeholder="Search..." />
      <p>
        <strong>Name Price</strong>
      </p>
      {this.allItems()}
      </div>
    );
  }
}
