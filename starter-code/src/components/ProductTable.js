import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ProductRow from "./ProductRow"
class ProductTable extends Component {
  constructor(props){
    super(props)
    this.data = this.props.products.data
    this.state= {

      filterData :[...this.data]
    }
  }
  search = (input) => {
    const _data = [...this.data]
    const filter = _data.filter(products => {
      const pName = products.name.toUpperCase()
      return(pName.includes(input))
    })
    this.setState({filterData:filter})
  } 

  render(){
    return(
      <div>
        <SearchBar search={this.search} />
        <ul>
          {this.state.filterData.map((product, idx) => <ProductRow key={idx}{...product}  />)}
        </ul>
      </div>
    )
  }
}
export default ProductTable