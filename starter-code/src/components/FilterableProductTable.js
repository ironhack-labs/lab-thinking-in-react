import React from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  state = {
    products: this.props.data,
    text:''
  }

  filterBy = (someState) => {
    this.setState({
      products: this.props.data.filter(item => item.name.toLowerCase().includes(someState.toLowerCase())),
      text:someState
    })
  }
  /* por qué cojones este no va y el otro si?¿
    filterBy = (someState) => {
    const filteredProducts = this.props.data.filter(element => element.name.toUpperCase().includes(this.state.text.toUpperCase()))
    this.setState({
      products:filteredProducts,
      text:someState
    })
  }
  */

  render(){
    console.log(this.state.text)
    console.log(this.state.products)

    return (  
      <div>
        <h1>IronStore</h1>
        <SearchBar filterBy = {this.filterBy} text={this.state.text}/>
        <ProductTable products={this.state.products}/>
      </div>
    )
  }
}

export default FilterableProductTable