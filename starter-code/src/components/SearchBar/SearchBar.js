import React, { Component } from 'react'
import './SearchBar.css';

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.props=props
    this.state = {
      name: "",
    }
  }

  handleInput = (e) => {
    // let { name, value } = e.target
    // this.setState({[name]: value})
    
    this.setState({ ...this.state, name: e.target.value}, ()=> this.props.searchProduct(this.state.name))
  }

  componentDidUpdate() {

  }
   
  render() {
    return (
      <div>
        <input className="searchBar" name="searchBar" type="text" placeholder="search..." onChange={event => this.handleInput(event)}/> 
        <div className="checkbox-container">
        <input type="checkbox"/> <span>Only show products in stock</span>

        </div>
       
      </div>
    )
  }
}
