import React, {Component} from 'react';

class ProductRow extends Component {
    render () {
      console.log(this.props)
      // const productArr = this.props.products.data
      return (
      // productArr.map(p =>
      // <tr>
      //     <td>{p.name}</td>
      //     <td>{p.price}</td>
      //  </tr>
      // )
        <tr>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      )
    }
  };
  export default ProductRow