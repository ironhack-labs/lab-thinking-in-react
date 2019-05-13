import React, { Component, createContext } from 'react'
import dataJson from '../data.json'
export const Mycontext = createContext()

const { data } = dataJson

export default class MyProvider extends Component {
  state = {
    products: data
  }

  componentDidMount() {
    console.log(this.state.products)
  }

  render() {
    return (
      <Mycontext.Provider value={{ products: this.state.products }}>
        {this.props.children}
      </Mycontext.Provider>
    )
  }
}
