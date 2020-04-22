import React, { Component } from 'react';

class ProductRow extends Component {

  outOfStock = (item) => {
    if (item.stocked === false) {
      return {'color': 'red'};
    }
  }

filterRendering = () => {
  const { products, searchQuery, checkBox } = this.props;
  const availableProducts = products.data.filter(item => item.stocked === true);
  const PrintedRow = (item) => <tr className="item-table" key={item.name}><td style={this.outOfStock(item)}>{item.name}</td><td>{item.price}</td></tr>
  const includes = (item) => item.name.toLowerCase().includes(searchQuery.toLowerCase());

  if (searchQuery === '' && checkBox === false ) {
    return products.data.map(item => PrintedRow(item));
  } else if (searchQuery !== '' && checkBox === false) {
    return products.data.map(item => {
      if (includes(item)) {
        return PrintedRow(item);
      } 
    })
  } else if (searchQuery === '' && checkBox === true) {
    return availableProducts.map(item => PrintedRow(item));
  } else {
    return availableProducts.map(item => {
      if (includes(item)) {
        return PrintedRow(item);
      } 
    })
  }
}

  render() { 
    return (
      <tbody>
        {this.filterRendering()}
      </tbody>
    );
  }
}

export default ProductRow;





