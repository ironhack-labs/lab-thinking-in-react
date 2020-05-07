import React, { Component } from 'react';
import store from '../../data.json'
import Product from './Product'

class ProductRow extends Component {

    constructor(props) {
        super(props)
        this.dataCopy = [...store.data]
        this.state = {
            productData: this.dataCopy
        }
    }
  render() {
    return (
        <>
            {
                this.state.productData.map((eachData, idx) => <Product key={idx} {...eachData}/>)
             }
        </>

    )
  }
}
export default ProductRow