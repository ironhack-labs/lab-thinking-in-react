import React, {Component} from 'react'
import Product from './ProductRow'

class productTable extends Component {
  
  render() {
    
    return (
      <table className="rows">
        <tbody>
        {
          this.props.products.map((product, index) => {
            return <Product key= {index} {...product}/>
          })
        }
        </tbody>
      </table>
      
    )
  }
}

export default productTable
