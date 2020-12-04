import React from 'react';

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
            return (
              <tr key={product.id}>
                <td style={{ color: product.stocked ? 'black' : 'red' }}>
                  {product.name}
                </td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Productable;
