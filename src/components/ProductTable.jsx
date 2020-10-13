import React from 'react'
import ProductRow from './ProductRow'

class ProductTable extends React.Component {

  
  render() {
    
    console.log(this.props.products.products.data);
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          
          {this.props.products.products.data.map(p => {
            return (
              <ProductRow 
              key={p.key}
              product={p}
              />
            )
          })}
        </tbody>
      </table>
  
    )
  }
}

export default ProductTable