import React, {Component} from 'react'

export default class  SearchBar extends Component{
  
  constructor (props) {
    super(props)
		this.state = {
			"input" : "",
		}
  }
 
  handleSearch = (event) => {

    this.setState({"input": event.target.value}, () =>{
      this.props.updateTable(this.state.input)
    })
  }

  handleCheck = (event) => {
		this.setState( {"inStock": true}, () => {
			this.props.stockFilter(true)
		})
  }
  
  render (){

    return (
      <div>
      <h3>Search</h3>
      <br/>
      <input type ="text" placeholder="search" value={this.state.input} onChange={(e) => this.handleSearch(e)}/>
      <br/>
      <input type="checkbox" onChange={(e) => this.handleCheck(e)}/>
      <label>Only Show products on display</label>
    </div>
  ) 
 }
}
