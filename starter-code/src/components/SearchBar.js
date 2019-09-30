import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state={
      searchName:'',
      isChecked:false,
    }
  }

  search =(e)=>{
  
    this.setState({
      searchName: e.target.value,
    },()=>{
        this.props.filter(this.state.searchName,this.state.isChecked)
    })

  }

  inStock =(e)=>{
    this.setState({
      isChecked: !this.state.isChecked,
    },()=>{
      this.props.filter(this.state.searchName,this.state.isChecked)
    })
  }

  render() {
    return (
      <div style={style} >
        <p>Search</p>
          <input onChange={this.search} name="search" value={this.state.searchName} style={{width:'100%',boxSizing:'border-box',height:'30px'}}type="text"/>
          <div>
          <input style={{marginTop:'20px'}} onChange={this.inStock} type="checkbox" name="" id=""/> Show only products in stock
          </div>
      </div>
    )
  }
}

const style ={
  marginBottom: '10px',
  padding:'5px',
  boxSizing:'border-box',
  width:'100%',
}
