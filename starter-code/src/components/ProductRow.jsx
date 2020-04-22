import React, { Component } from 'react';

class ProductRow extends Component {

  outOfStock = (item) => {
    if (item.stocked === false) {
      return {'color': 'red'};
    }
  }

  render() {
    const { products, searchQuery } = this.props;    
    return (
      <tbody>
        {products.data.map(item => {
          if (searchQuery === '') {
            return <tr className="item-table" key={item.name}><td style={this.outOfStock(item)}>{item.name}</td><td>{item.price}</td></tr>
          } else {
            if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
              return <tr className="item-table" key={item.name}><td style={this.outOfStock(item)}>{item.name}</td><td>{item.price}</td></tr>
            } 
          }
        })}
      </tbody>
    );
  }
}

export default ProductRow;