import React, { Component } from 'react';
import {Search} from './Search.js'
import {ProductTable} from './ProductTable.js'

export class FiltProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search : "",
      inStock : false
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleInput(value) {
    this.setState(() => ({
      search : value
    }))
  }

  handleCheck() {
    this.setState(prevState => ({
      inStock : !prevState.inStock
    }))
  }

  render () {
    return(
      <div>
        <h1>IronStore</h1>
        <Search onInput={this.handleInput}/>
        <input onChange={this.handleCheck} type="checkbox"/>
        <ProductTable inStock={this.state.inStock} search={this.state.search} products={this.props.products}/>
      </div>
    )
  }
}