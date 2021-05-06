import React from 'react'
import Searchbar from "./Searchbar"
import ProductTable from "./ProductTable"


class FilterableProductTable extends React.Component{

  state = {
    products: this.props.products,
    renderProducts: this.props.products,
    checked: false
  }

  filterProducts(e){
    const {value} = e.target
    const filteredProducts = this.state.products.filter(product=>{
      return product.name.toLowerCase().includes(value)
    })
    this.setState({...this.state, renderProducts: filteredProducts})
  }

  onStock(){
    const {checked} = this.state
    if (checked === false){
      const filteredProducts = this.state.products.filter(product=>{
        return product.stocked == true
      })
      this.setState({...this.state, checked: true, renderProducts: filteredProducts})
    }else{
      this.setState({...this.state, checked: false, renderProducts: this.state.products})
    }
  }

  render(){
    return (
      <div className="FilterableProductTable">
        <h1>IronStore</h1>
        <Searchbar filterProducts={(e)=>this.filterProducts(e)} onStock={()=>this.onStock()}/>
        <ProductTable renderProducts={this.state.renderProducts}/>
      </div>
    )
  }
}

export default FilterableProductTable