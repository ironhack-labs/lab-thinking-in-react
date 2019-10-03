import React, { Component } from 'react'
// import { runInThisContext } from 'vm';

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: "",
      checkbox: false
    }
  }

  searchBox(e){
    this.searchProduct(e.target.value, this.state.checkbox)
  }

  checkBox(){
    this.searchProduct(this.state.text, !this.state.checkbox)
  }

  searchProduct(word, check){
    let findState = this.props.products.filter(product => product.name.toLowerCase().includes(word.toLowerCase()))
    if(check){
      findState = findState.filter(product => product.stocked)
    }
    this.setState({
      ...this.state,
      text: word,
      checkbox: check
    }, () => this.props.changeState(findState))
  }

  render() {
    return (
      <div className="search-bar">
        <input className="search-box" defaultValue="" type="text" onChange={(e) => this.searchBox(e)}></input>
        <br></br>
        <input type="checkbox" onChange={() => this.checkBox()}></input><span>Only show products on stock</span>
      </div>
    )
  }
}
