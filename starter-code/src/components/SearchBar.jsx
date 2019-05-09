import React, { Component } from 'react';

class SearchBar extends Component {
  
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      name: '',
      stocked: false,   
    }
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerCheckBox = this.handlerCheckBox.bind(this);
    
  }  
  
  handlerChange(event) {
    let { name, value } = event.target;    
    this.setState({[name]: value}, () =>{
      this.props.SearchBar(this.state)    
    })
    // if(checkstock){

    // }    
  }

  handlerCheckBox(){
    this.setState({
        stocked: !this.state.stocked,
    })  
    this.props.SearchBar(this.state)
  }


  
  render() {
    return (
      <div className="search-container">        
          <label>Search</label>
          <input type="text" name="name" value={this.state.name} onChange={(e)=>this.handlerChange(e)}></input>
          <div>
            <label>Only show products in Stock</label>
            <input name= "checkStock" type="checkbox" checked={this.state.stocked} onChange={() => this.handlerCheckBox()}/>      
          </div>
      </div>
    )  
  }
}

export default SearchBar;






