import React, {Component} from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.filteredProducts.map((product, index) => {
            return <ProductRow product={product} key={index}/>
          })}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;