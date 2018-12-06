import React, { Component } from 'react'


export default class SearchBar extends Component {
  constructor(){
    super();
    this.state = {
      findProducts: undefined
    }
  }

  
  

  render() {
    // const listProducts=[...this.props.data];
    // function findProduct(listProducts){
    //   this.setState({...this.state, findProducts:listProducts.target.value})
    // }
    return (
      <div>
        {/* onChange={this.findProduct} */}
        <input type="text"  placeholder="Search..."/>
      </div>
    )
  }
}
