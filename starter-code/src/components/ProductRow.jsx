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

    if (searchQuery === '' && checkBox === false ) {
      return products.data.map(item => <tr className="item-table" key={item.name}><td style={this.outOfStock(item)}>{item.name}</td><td>{item.price}</td></tr>)
    } else if (searchQuery !== '' && checkBox === false) {
      return products.data.map(item => {
        if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return <tr className="item-table" key={item.name}><td style={this.outOfStock(item)}>{item.name}</td><td>{item.price}</td></tr>
        } 
      })
    } else if (searchQuery === '' && checkBox === true) {
      return availableProducts.map(item => <tr className="item-table" key={item.name}><td style={this.outOfStock(item)}>{item.name}</td><td>{item.price}</td></tr>)
    } else {
      return availableProducts.map(item => {
        if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return <tr className="item-table" key={item.name}><td style={this.outOfStock(item)}>{item.name}</td><td>{item.price}</td></tr>
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