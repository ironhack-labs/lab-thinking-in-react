import React from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  state = {
    products: this.props.data,
    text:'',
  }

  filterBy = (event) => {
    this.setState({
      products: this.props.data.filter(product => product.name.toLowerCase().includes(event.toLowerCase())),
      text:event
    })
  }

  checkBox = (e) => {
    if (e === false) {
      this.setState({
        products: this.props.data.filter(product => product.stocked === true),
        text: this.state.text
      }) 
    } else {
      this.setState({
        products: this.props.data,
        text: this.state.text
      }) 
    }
  }

  render(){
    return (  
      <div>
        <h1>IronStore</h1>
        <SearchBar inStock={this.checkBox} stockSate={this.state.inStock} filterBy = {this.filterBy} text={this.state.text}/>
        <ProductTable products={this.state.products}/>
      </div>
    )
  }
}

export default FilterableProductTable


  /* por qué cojones este no va y el otro si?¿
    filterBy = (someState) => {
    const filteredProducts = this.props.data.filter(element => element.name.toUpperCase().includes(this.state.text.toUpperCase()))
    this.setState({
      products:filteredProducts,
      text:someState
    })
  }
  */