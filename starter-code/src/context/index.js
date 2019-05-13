import React, { createContext, Component } from 'react'
import { data } from '../data.json'

export const Mycontext = createContext()

export default class MyProvider extends Component{
  state = {
    products: data,
    temp: data
  }

  handleSearch = e => {
    const filteredProducts = data.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()))

    this.setState({
      products: filteredProducts, 
      temp: filteredProducts
    })
  }

  handleCheck = e => {
    if(e.target.checked) {
      const filteredProducts = this.state.products.filter(product => product.stocked)
      this.setState({ products: filteredProducts })
    } else this.setState({ products: this.state.temp })
  }

  render() {
    return(
      <Mycontext.Provider value={{
        products: this.state.products,
        handleSearch: this.handleSearch,
        handleCheck: this.handleCheck
      }}>
        {this.props.children}
      </Mycontext.Provider>
    )
  }
}