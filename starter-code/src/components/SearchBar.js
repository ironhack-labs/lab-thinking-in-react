import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(){
    super()
    this.state = {
      search : ""

    }
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    let {value} = e.target;
    this.setState({
      search: value
      
    }, () => this.props.sendState(this.state.search));
    

  }

  render() {
    return (
      <div>
      <label>Search</label><br></br>
      <form><input type="text" name="search" value={this.state.search} onChange={(e) => this.handleChange(e)}></input></form>
      
    </div>
    )
  }
}

