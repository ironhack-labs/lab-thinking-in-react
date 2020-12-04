import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    // filter the list
    console.log(
      "we're now inside ProductRow.js and this is query: ",
      this.props.query
    );
    let filteredProducts = this.props.products.data.filter((product) =>
      product.name.toLowerCase().includes(this.props.query.toLowerCase())
    );
    console.log('Und das ist der gefilterte Array: ', filteredProducts);

    return (
      <>
        {filteredProducts.map((product) => {
          return (
            <tr style={{ color: product.stocked ? 'inherited' : 'red' }}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              {/* <td>{product.category}</td> */}
              <td>{product.stocked === true ? 'yes' : 'no'}</td>
            </tr>
          );
        })}
      </>
    );
  }
}
