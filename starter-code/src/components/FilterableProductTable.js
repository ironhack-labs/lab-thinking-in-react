import React, {Component} from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {

  constructor(){
    super()
    this.state = {
      searchintable : ""

    }
  }

  updateState = search => {
    
    this.setState({
      searchintable: search
      
    })

  }
  render(){
  return (
    <div>
    <h1>IronStore</h1>
      <SearchBar sendState={this.updateState} />
    <br></br>
    <hr></hr>
      <ProductTable  cadenaabuscar={this.state.searchintable} />
    
    </div>
  )
  }
}
