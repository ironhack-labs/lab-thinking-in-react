import React, { Component} from 'react';
import ProductRow from './ProductRow'; 


class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = { products: props.products };
  }
  displayProducts = () => {
    const { productSearch, checked } = this.props;

    const { products } = this.state;
    if(productSearch === '') {
      return products.data.map((product, index) => { 
        return (
          (!checked || (checked && product.stocked))
          ?  <ProductRow key={index} name={product.name} stocked={product.stocked} price={product.price} />
          : null
        )
      })
    } else {
      return products.data.map((product, index) =>{ 
        return(
          product.name.toLowerCase().includes(productSearch?.toLowerCase())
          && (!checked || (checked && product.stocked))
          ? <ProductRow key={index} name={product.name} stocked={product.stocked} price={product.price} />
          : null
        )
      })
    }  
  }
  render(){

    return (
    <table className="StyleRound">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {this.displayProducts()}
      </tbody>
    </table>
    )
  }
}

export default ProductTable;