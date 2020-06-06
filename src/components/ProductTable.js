import React from 'react';
import data from '../data.json'
import ProductRow from './ProductRow'


class ProductTable extends React.Component {

  state = {
products: data.data,
searchTerm: this.props.searchTerm,
onlyInStock: "",
  }


  render() {
    let filteredProducts = this.state.products.filter((p) => p.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))


    return (
      <div>

<table>
<tbody>
<tr>
          <th>Name</th>
          <th>Price</th>
          </tr>
{filteredProducts.map((p) => <ProductRow name={p.name} price={p.price} onlyInStock={this.props.onlyInStock} stocked={p.stocked} key={p.name} />)}
</tbody>
</table>

      </div>
    )
  }

}


export default ProductTable;