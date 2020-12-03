import React from 'react';
import products from '../data.json';

class Productrow extends React.Component {
  state = {
    singleProduct: {
      name: '',
      price: 0,
      stocked: false,
    },
  };

  render() {
    return (
      <tr>
        <td>{this.state.singleProduct.name}</td>
        <td>49.99</td>
        <td>false</td>
      </tr>
    );
  }
}

export default Productrow;
