import React, { Component } from 'react';
import './PR.css';

class ProductRows extends Component {
  render() {
    const rowData = this.props.products.data.map((item, index) => (
      <tr className="tableRows" key={index}>
        <td>
          {!item.stocked && <div className="outOfStock">{item.name}</div>}
          {item.stocked && item.name}
        </td>
        <td>{item.price}</td>
      </tr>
    ));

    return <tbody>{rowData}</tbody>;
  }
}

export default ProductRows;
