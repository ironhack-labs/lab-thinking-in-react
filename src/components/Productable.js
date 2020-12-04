import React from 'react';
import Productrow from './Productrow';

class Productable extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.passedProducts.map((product) => {
            return <Productrow product={product} key={product.id}></Productrow>;
          })}
        </tbody>
      </table>
    );
  }
}

export default Productable;
