import React from 'react'
import ProductRow from './ProductRow'

class ProductTable extends React.Component {

  state = {
    products: []
  }
  render() {
    
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map(p => {
            return (
              <ProductRow product={p}/>
            )
          })}
        </tbody>
      </table>
  
    )
  }
}

export default ProductTable