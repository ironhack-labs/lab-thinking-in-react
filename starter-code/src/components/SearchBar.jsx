import React, { Component } from 'react';

class SearchBar extends Component {
  
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      name: '',    
    }
    this.handlerChange = this.handlerChange.bind(this);
    
    
  }  
  
  handlerChange(event) {
    let { name, value } = event.target;    
    this.setState({[name]: value}, () =>{
      this.props.SearchBar(this.state)    
    })    
  }
  
  render() {
    return (
      <div className="search-container">        
          <label>Search</label>
          <input type="text" name="name" value={this.state.name} onChange={(e)=>this.handlerChange(e)}></input>      
      </div>
    )  
  }
}

export default SearchBar;






