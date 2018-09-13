import React, { Component } from 'react';
import Search from './Search'
import Protable from './Protable'
import products from '../data.json'
import Checkbox from './Checkbox'

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products,
      query: '',
      checkbox: false,
    }

    this._handleQueryChange = this._handleQueryChange.bind(this)
    this._checkboxChange = this._checkboxChange.bind(this)
  }

  render() {
    // console.log("@Container this.state.products.data: ", this.state.products.data)

    const mappedPro = this.state.products.data
      .sort(function (a, b) {
        if (a.category < b.category) {
          return -1;
        } if (a.category > b.category) {
          return 1;
        } else {
          return 0
        }
      })
      .filter(el => {
        return el.name.toLowerCase().includes(this.state.query.toLowerCase())
      })
      .filter(el => {
        return !this.state.checkbox ? el : el.stocked == true
      })
      .map((el, index) =>
        <Protable
          key={index}
          products={el}
          index={index}
        />
      )
    console.log("@Container mappedPro: ", mappedPro)

    return (
      <div>
        <Search query={this.state.query} handleQueryChange={this._handleQueryChange} />
        <Checkbox status={this.state.checkbox} checkboxChange={this._checkboxChange} />
        {mappedPro}
      </div>
    );
  }

  _handleQueryChange(event) {
    console.log("@Container this.state.query: ", this.state.query)
    this.setState({
      query: event.target.value,
    })
  }

  _checkboxChange(event) {
    const status = !this.state.checkbox;

    this.setState({
      checkbox: status,
    })
  }

}

export default Container;