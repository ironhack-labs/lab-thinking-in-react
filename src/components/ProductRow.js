import React from 'react';

class ProductRow extends React.Component {

  render() {
    return (
      <tr className="product-row" key={this.props.id}>
        {this.props.stocked === false ? (
          <td style={{ color: 'red' }}>{this.props.name}</td>
        ) : (
          <td style={{ color: 'white' }}>{this.props.name}</td>
        )}
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;