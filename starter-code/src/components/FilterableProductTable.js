import React, { Component } from 'react'
import data from '../data.json'
import SearchBar from './SearchBar'

class FilteredProductTable extends Component {

  constructor() {
    super()

    this.state = {
      ourProducts: data.data,
      ourFilterProducts: []
    }
  }

  searchProduct = result => {

    let filtered = this.state.ourProducts.filter(elm => {
      return elm.name.toLowerCase().includes(result.toLowerCase())
    })
    this.setState({
      ourFilterProducts: filtered,
    })
  }

  filterStock = inStock => {
    this.setState({
      inStock
    })
  }

  componentWillMount() {
    this.filterStock()
  }


  render() {
    return (
      <div>
        <SearchBar searching={this.searchProduct} filtering={this.filterStock} />
        <ul>
          {
            this.state.ourFilterProducts.length ?
              this.state.ourFilterProducts.map((eachProduct, idx) => {
                return <li key={idx} className={this.state.inStock ? eachProduct.stocked ? null : "red" : null}>{eachProduct.name}{eachProduct.price}</li>
              })
              :
              this.state.ourProducts.map((eachProduct, idx) => {
                return <li key={idx} className={this.state.inStock ? eachProduct.stocked ? null : "red" : null}>{eachProduct.name}{eachProduct.price}</li>
              })
          }
        </ul>
      </div>

    )
  }
}


export default FilteredProductTable


//                     {this.state.showOscarAwarded ? 'Ocultar ganadoras del Oscar' : 'Mostrar ganadoras del Oscar'}
