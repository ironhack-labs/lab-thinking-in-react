import React from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  state = {
    products: this.props.data,
    text:''
  }

  filterBy = (someState) => {
    const productsCopy = [...this.state.products];
    const filteredProducts = productsCopy.filter(element => element.name.indexOf(someState))
    this.setState({
      products:filteredProducts,
      text:someState
    })
  }

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