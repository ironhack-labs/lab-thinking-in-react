import React, { Component } from 'react'
import SearchBar from '../../sections/SearchBar/SearchBar'
import ProductTable from '../../sections/ProductTable/ProductTable'
import './FilterableProductTable.css'

export default class FilterableProductTable extends Component {

  constructor(props) {
    super();

    this.state = {
      products: props.products,
      filteredProducts: props.products,
      showOnlyStocked: false
    }
  }

  toggleStocked(){

    const stockToggled = !this.state.showOnlyStocked;

    this.setState({
      ...this.state,
      showOnlyStocked: stockToggled
    })
  }

  searchProducts(search) {
  
    let newProducts = [ ...this.state.products ];

    const newRegEx = new RegExp(`^${search}|\\s${search}`, 'i');

    newProducts = newProducts.filter(product => newRegEx.test(product.name))
    
    this.setState({
      ...this.state,
      filteredProducts: newProducts
    })
  }

  render() {
    return (
      <div className="filterable-product-table">
        <h1>IronStore</h1>
        <SearchBar 
            searchProducts={(search) => this.searchProducts(search)} 
            toggleStocked={() => this.toggleStocked()}
        />

        {
          this.state.filteredProducts.length === 0 ?
       
          <p>No products found</p> :

          <ProductTable 
              products={
                this.state.showOnlyStocked ? 
                this.state.filteredProducts.filter(product => product.stocked) 
                : this.state.filteredProducts }
          /> 
        }

      </div>
    )
  }
}
