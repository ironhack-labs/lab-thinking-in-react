import React from 'react'
import Searchbar from "./Searchbar"
import ProductTable from "./ProductTable"


class FilterableProductTable extends React.Component{

  state = {
    products: this.props.products,
    renderProducts: this.props.products
  }

  filterProducts(e){
    const {value} = e.target
    const filteredProducts = this.state.products.filter(product=>{
      return product.name.includes(value)
    })
    this.setState({...this.state, renderProducts: filteredProducts})
  }

  render(){
    return (
      <div className="FilterableProductTable">
        <h1>IronStore</h1>
        <Searchbar filterProducts={(e)=>this.filterProducts(e)}/>
        <ProductTable renderProducts={this.state.renderProducts}/>
      </div>
    )
  }
}

export default FilterableProductTable