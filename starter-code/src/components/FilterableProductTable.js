import React, {Component} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class filterTable extends Component {
  
  state = {
    products: this.props.products,
    product: '',
    filter: ''
  }

filter = (products) => {
  this.setState({
    product: products
  })
  const arr = this.state.products
  const filter = arr.filter(function(el) {
      return el.name.toLowerCase().indexOf(products.toLowerCase()) > -1;
  })
  console.log(filter)
  this.setState({
    filter: filter
  })
    
}

  render() {
    const prod = this.state.product
    const table = this.state.filter
    const tableComplete = this.state.products
    const tableRender = table !== '' ? table : tableComplete
  
    return (
      <div>
        <SearchBar products={prod} filterProduct={product => this.filter(product)}/>
        <table className="rows">
          <tbody>
            <tr>
              <th className="cell">
                Name
              </th>
              <th className="cellTwo">
                Price
              </th>
            </tr>
          </tbody>
        </table>
        <br/>
        <ProductTable products={tableRender} />
      </div>
      
    )
  }
}

export default filterTable