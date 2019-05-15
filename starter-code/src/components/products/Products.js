
import React, { Component } from 'react';
import products from '../../data.json'
import ListProducts from '../listProducts/ListProducts'


class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      category: '',
      price: '',
      stocked: '',
      name: ''
    }
  }



  render () {
    // console.log(this.props);
    return (
      <table className="tableProd">
      <tr>
        <th>Name</th>
        <td className="table">{this.state.name}</td>
        <th>Price</th>
      </tr>
      <ListProducts nameListProduct={this.props} list={this.state.products}/>
    </table>
    );
  }

}
 export default Products;