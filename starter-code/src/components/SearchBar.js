import React, { Component } from 'react'

export default class SearchBar extends Component {

  state = {
    filter: "",
    check: false
  }

  setVal(val, key) {
    this.setState({
      ...this.state,
      [key]: val
    }, () =>  this.props.sendData(this.state) )
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.setVal(e.target.value, "filter")}/>
        <input type="checkbox" name="" onChange={(e) => this.setVal(e.target.checked, "check")}/>
      </div>
    )
  }
}
