import React, { Component } from 'react'

class ProductTable extends Component {
  state = {
    allProducts: this.props.allProducts,
    products: this.props.allProducts
  }

  
  onChange = e => {
    let { allProducts } = this.state
    let searchterm = e.target.value.toLowerCase()
    let products = allProducts.filter(elem => elem.name.toLowerCase().includes(searchterm))
    console.log(products)
    this.setState({ products })
  }

  render() {
    let { products } = this.state
    console.log(products)

    return (
      <div>
        <input onChange={this.onChange} type="text" name="search" placeholder="Search" defaultValue="" />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod, index) => {
              return (
                <tr key={index}>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable
