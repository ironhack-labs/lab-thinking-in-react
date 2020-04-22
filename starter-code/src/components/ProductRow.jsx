import React, { Component } from 'react';

class ProductRow extends Component {

  outOfStock = (item) => {
    if (item.stocked === false) {
      return {'color': 'red'};
    }
  }

  render() {
    const { products } = this.props;    
    console.log(products);
    return (
      <tbody>
        {products.data.map(item => <tr className="item-table" key={item.name}><td style={this.outOfStock(item)}>{item.name}</td><td>{item.price}</td></tr>)}
      </tbody>
    );
  }
}

export default ProductRow;