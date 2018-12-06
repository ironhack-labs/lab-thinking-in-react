import React, { Component } from 'react'
import './SearchBar.css';

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.props=props
    this.state = {
      name: "",
      checkbox: false
    }
  }

  handleInput = (e) => {

    this.setState({ ...this.state, name: e.target.value}, ()=> this.props.searchProduct(this.state.name))
  }

  toggleChange = () => {
    this.setState({...this.state,
      checkbox: !this.state.checkbox,
    }, () => this.props.searchOutStock(this.state.checkbox));
  }
   
  render() {
    return (
      <div>
        <input className="searchBar" name="searchBar" type="text" placeholder="search..." onChange={event => this.handleInput(event)}/> 
        <div className="checkbox-container">
        <input type="checkbox" checked={this.state.checkbox} onChange={this.toggleChange} /> <span>Only show products in stock</span>

        </div>
       
      </div>
    )
  }
}
