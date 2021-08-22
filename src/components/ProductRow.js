import React from 'react';

class ProductRow extends React.Component {
  render() {
    return (
      <>
        <tr className="table-row">
          {this.props.stocked ? (
            <td className="in-stock">{this.props.name}</td>
          ) : (
            <td className="out-of-stock">{this.props.name}</td>
          )}

          <td>{this.props.price}</td>
        </tr>
      </>
    );
  }
}

export default ProductRow;
