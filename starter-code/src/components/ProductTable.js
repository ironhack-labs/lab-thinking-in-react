import React, { Component } from 'react'
import ProductRow from './ProductRow'
import products from '../data.json'

export default class ProductTable extends Component {
  
  render() {

    // let filterExpression =
    // this.props.stockSearch ?
    // product => product['name'].toLowerCase().includes(this.props.searchString.toLowerCase()) && product['stocked'] === this.props.stockSearch :
    // product => product['name'].toLowerCase().includes(this.props.searchString.toLowerCase())

    let filterExpression =
      product => product['name'].toLowerCase().includes(this.props.searchString.toLowerCase()) && (!this.props.stockSearch || product['stocked'] === this.props.stockSearch)

    let filteredProducts = products['data'].filter(filterExpression)
    
    return(
      <div className='ProductTable'>
        <div className='topRow'>
        <p>Name</p> <p>Price</p>
        </div>
        {filteredProducts.map((product, i) =>
          <ProductRow name={product.name} key={i}/>
        )}
      </div>
    )
  }
}
