import React, { Component } from 'react'

export default class SearchBar extends Component {


  state = {
    search: "",
    stockCheck: false
  }


  textFormHandler = (e) => {
    let newState = {
      ...this.state,
      search: e.target.value
    }

    console.log(e.target.value)

    this.props.handlerFunction(newState.search, newState.stockCheck)

    this.setState(newState)

  }

  checkboxFormHandler = (e) => {
    let newState = {
      ...this.state,
    }

    newState.stockCheck = !newState.stockCheck

    console.log(newState.stockCheck)

    this.props.handlerFunction(newState.search, newState.stockCheck)

    this.setState(newState)

  }

  render() {
    return (
      <div>
        <input onChange={this.textFormHandler} type="text" name="searchQuery" placeholder="enter your query" />
        <input onChange={this.checkboxFormHandler} type="checkbox" id="onlyStock" name="onlyStock" value="withStock" />
        <label htmlFor="onlyStock">Only show products on stock</label>

      </div>
    )
  }
}
