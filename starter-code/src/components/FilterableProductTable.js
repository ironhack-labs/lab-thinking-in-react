import React, { Component } from 'react';
import SearchBar from './SearchBar';
import products from '../data.json'
export default class FilterableProductTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: props.products.data
    }
  }
  onFilter = (event) => {
    const productsCopy = products.data;
    const newProducts = productsCopy.filter(product => product.name.toLowerCase().includes(event.toLowerCase()))
    this.setState({
     products : newProducts
    })
}
  checkboxFilter = (event) => {
    const productsCopy = products.data;
    if (event){
      const newProducts = productsCopy.filter(product => product.stocked === event);
      this.setState({
        products : newProducts
       })
    } else {
      const newProducts = productsCopy
      this.setState({
        products : newProducts
       })
    }
  }

  render(){
    console.log(this.state.products[0].name);
    return(
  <div>
      <SearchBar Filter={this.onFilter} inputValue={this.state.newFoods} FilterCheckbox={this.checkboxFilter}/>
     {
          this.state.products.map((oneProduct, index) => {
            return(
              <div key={index}>
                <ul className="list-group list-group-horizontal-md">
                  <li className="list-group-item">{oneProduct.name}</li>
                  <li className="list-group-item">{oneProduct.price}</li>
                </ul>              
              </div>
            )
          })
    }
  </div>
    )
  }
}