import React, { Component } from 'react';
import ProductRow from './ProductRow'

class ProductTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let productsArr = this.props.products;
    return(
     <table>
       <thead>
         <th>Name</th>
         <th>Price</th>
       </thead>
       <tbody>
          {
            productsArr.map((product, idx) => <ProductRow product={product} key={idx} />)
          }
       </tbody>
     </table> 
    )
  }

}

export default ProductTable;