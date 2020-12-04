import React from 'react';

class Productrow extends React.Component {
  render() {
    return (
      <tr key={this.props.product.id}>
        <td style={{ color: this.props.product.stocked ? 'black' : 'red' }}>
          {this.props.product.name}
        </td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default Productrow;
