import React from 'react';
import Productrow from './Productrow';
import products from '../data.json';

class Productable extends React.Component {
  state = {
    filteredproducts: [],
  };

  render() {
    return (
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Available</th>
        </thead>
        <tbody>
          <Productrow></Productrow>
        </tbody>
      </table>
    );
  }
}

export default Productable;
